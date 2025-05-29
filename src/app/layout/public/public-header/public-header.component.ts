import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent {
  registerform: any;
  loginform: any;
  register: boolean = true;
  isLoggedIn: boolean = false;
  currentUser: any;

  @ViewChild('loginmodal') modalRef!: ElementRef;

  constructor(private fb: FormBuilder, private route: Router, private http: HttpClient) {

  }

  ngOnInit() {
    this.getform();
    this.getloginform();
    // localStorage.setItem('user', JSON.stringify(null));
    const localData = localStorage.getItem('user');
    const parsedData = localData ? JSON.parse(localData) : null;
    if (parsedData) {
      this.currentUser = parsedData;
      this.isLoggedIn = true;
      console.log("current user const ---", this.currentUser.emailId, this.currentUser.userRole, typeof (this.currentUser));
    }
    else{
      this.logout();
      this.currentUser = null;
      this.isLoggedIn = false;
    }
  }

  openModal() {
    const modalEl = this.modalRef.nativeElement as HTMLElement;
    modalEl.style.display = 'block';
    modalEl.classList.add('show', 'fade');
  }
  closeModal() {
    this.modalRef.nativeElement.style.display = 'none';
  }

  logout() {
    localStorage.removeItem('user');
  }

  getform() {
    this.registerform = this.fb.group({
      name: new FormControl(),
      userRole: "Customer",
      email: new FormControl(''),
      mobileno: new FormControl(''),
      password: new FormControl(''),
      createdOn: new Date().toISOString(),
    })
  }

  getloginform() {
    this.loginform = this.fb.group({
      name: new FormControl(),
      mobileno: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }

  // {
  //     "userId": 292,
  //     "name": "Sanket",
  //     "userRole": "Customer",
  //     "emailId": "sanket@gmail.com",
  //     "mobileNo": "7895689875",
  //     "password": "123",
  //     "createdOn": "2024-01-23T11:29:27.607"
  //   },
  submit() {
    console.log("submit ()")
    console.log("register values --", this.registerform.value);
    const obj = this.registerform.value;

    const params: any = {
      name: obj?.name,
      CustomerName: obj?.name,
      userRole: "Customer",
      emailId: obj?.email,
      password: obj?.password,
      mobileno: obj?.mobileno,
      createdOn: new Date().toISOString(),
    }
    console.log("params --", params);

    this.http.post('https://freeapi.miniprojectideas.com/api/ZoomCar/AddNewUser', params).subscribe({
      next: (res: any) => {
        console.log("response --", res);
        if (res.result == true) { this.closeModal(); }
        else { alert(res.message); }
      },
      error: (error: any) => {
        console.log("error --", error);
        alert("Something went wrong, please try again later.");
      }
    })
  }

  login() {
    console.log("login ()")
    let obj = this.loginform.value;

    let params: any = {
      userRole: "Customer",
      name: obj?.name,
      mobileNo: obj?.mobileno,
      emailId: obj?.email,
      password: obj?.password,
    }

    this.http.post('https://freeapi.miniprojectideas.com/api/ZoomCar/Login', params).subscribe({
      next: (res: any) => {
        console.log("login data", res);
        if (res.result === true) {
          this.currentUser = res.data;
          localStorage.setItem('user', JSON.stringify(res.data));
          this.currentUser = res.data;
          console.log("current user ---", this.currentUser);
          this.isLoggedIn = true;
          this.closeModal();
          this.route.navigate(['/home']);
        }
      },
      error: (error: any) => {
        console.log("error", error);
      }
    })
  }
}
