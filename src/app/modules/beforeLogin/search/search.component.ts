import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IApiResponse } from 'src/app/core/modulesInterfaces/getLocation.model';
import { GetAllLocationService } from 'src/app/core/services/get-all-location.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  currentLocationId: number = 0;
  carsdata: any;
  cardata: any = null;
  isloggedin: boolean = false;
  bookmodal: any;
  getAlllocationsArray: any[] = [];
  carbookingform!: FormGroup;
  localdata: any;
  parsedUserId: string = '';


  @ViewChild('bookthiscardialog') bookthiscardialog!: ElementRef;

  constructor(private activatedRoute: ActivatedRoute,private http: HttpClient, private router: Router, private fb: FormBuilder, private getLocation: GetAllLocationService, private getalllocation: GetAllLocationService) {

    this.activatedRoute.params.subscribe({
      next: (res: any) => {
        console.log(res.locationid);
        this.currentLocationId = res.locationid;
        console.log("search fn constructor --", this.currentLocationId);
        this.getCarsbyLocation();
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  ngOnInit() {
    // this.bookmodal = this.bookthiscardialog.nativeElement;
    // console.log("book modal", this.bookmodal);
    this.getAllLocation();
    this.bookcarform();
    this.localdata = localStorage.getItem('user');

    if (this.localdata) {
      const parseddata = JSON.parse(this.localdata);
      this.parsedUserId = parseddata.name;
      this.isloggedin = true;
      console.log("user is logged in", this.isloggedin);
      this.openbookthiscardialog();
    }
  }

  ngAfterViewInit() {
    // this.bookmodal = this.bookthiscardialog.nativeElement;
    // console.log("book modal", this.bookmodal);
  }

  openbookthiscardialog() {
    this.bookthiscardialog.nativeElement.style.display = 'block'
  }
  closebookthiscardialog() {
    this.bookthiscardialog.nativeElement.style.display = 'none'
  }

  checkloggedIn() {
    const localdata = localStorage.getItem('user');

    if (localdata) {
      this.isloggedin = true;
      console.log("user is logged in", this.isloggedin);
      this.openbookthiscardialog();
    }
    else {
      this.isloggedin = false;
      console.log("user is not logged in", this.isloggedin);
      alert("Please login to book a car");

    }
  }

  bookcarform() {
    this.carbookingform = this.fb.group({
      customerId: [''],
      fromLocationId: [],
      toLocationId: [''],
      travelDate: [''],
      startTime: new Date().toISOString(),
      carId: [''],
      pickupAddress: [''],
      alternateContactNo: [''],
      invoiceNo: [''],
      isComplete: true
    })
  }
  getAllLocation() {
    this.getLocation.getAllLocation().subscribe({
      next: (res: any) => {
        console.log("All locations ", res.data);
        this.getAlllocationsArray = res.data;
      }
    })
  }
  getCarsbyLocation() {
    console.log("from search location id 1st -- ", this.currentLocationId);

    this.getalllocation.getCarsbyLocationId(this.currentLocationId).subscribe({
      next: (res: any) => {
        console.log("from search location id", this.currentLocationId);
        if (res.data.length == 0) {
          console.log("no data");
        }
        console.log(res.data);
        this.carsdata = res.data;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  getCarId(cardid: number) {
    // console.log("search file car id", cardid);
    // this.router.navigate(['/cardDetails', cardid]);

    this.getalllocation.getCarDetailsbyId(cardid).subscribe({
      next: (res: any) => {
        console.log("from search car details", res.data);
        this.cardata = res.data;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  bookCar() {
    const obj = this.carbookingform?.value;

    let params: any = {
      "customerId": this.localdata ? JSON.parse(this.localdata).userId : '',
      "fromLocationId": obj?.fromLocationId,
      "toLocationId": obj?.toLocationId,
      "travelDate": obj?.travelDate,
      "startTime": "2023-10-01T10:00:00Z",
      "carId": this.cardata.carId,
      "pickupAddress": obj?.pickupAddress,
      "alternateContactNo": obj?.alternateContactNo,
      "invoiceNo": obj?.invoiceNo,
      "isComplete": true
    }
    console.log("params --", params);

    this.http.post('https://freeapi.miniprojectideas.com/api/ZoomCar/createNewBooking', params).subscribe({
      next: (res: any) =>{
        if(res.result == true){
          console.log("Booking response --", res.message);
          this.carbookingform.reset();
          alert("Booking Successfull!!!");

        }
        else{
           console.log("Booking response --", res.message);
          alert("Booking Not Successfull!!!");
        }
      },
      error:(error: any) =>{
        console.log("Booking error --", error);
      }
    })
  }

}
