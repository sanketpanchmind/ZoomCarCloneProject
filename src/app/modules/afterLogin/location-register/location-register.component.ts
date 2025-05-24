import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { GetAllLocationService } from 'src/app/core/services/get-all-location.service';

@Component({
  selector: 'app-location-register',
  templateUrl: './location-register.component.html',
  styleUrls: ['./location-register.component.scss']
})
export class LocationRegisterComponent {

  locationform!: FormGroup;
  alllocationlist: any[] = [];

  constructor(private fb: FormBuilder, private getlocationservice: GetAllLocationService) {

  }
  ngOnInit() {
    this.defaultform();
    this.getallLocation();
  }

  defaultform() {
    this.locationform = this.fb.group({
      city: [''],
      title: [''],
      pincode: ['']
    });
  }

  getallLocation() {
    this.getlocationservice.getAllLocation().subscribe({
      next: (res: any) => {
        console.log(res.data);
        if (res.result == true) {
          this.alllocationlist = res.data;
        }
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }

  onSubmit() {
    let obj = this.locationform.value;


    const params: any = [{
      city: obj?.city,
      title: obj?.title,
      pincode: obj?.pincode
    }];

    this.getlocationservice.addlocation(params).subscribe({
      next: (res: any) => {
        console.log("location inserted");
        if (res.result == true) {
          this.locationform.reset();
        }
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }
}
