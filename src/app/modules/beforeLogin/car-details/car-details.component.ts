import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { GetAllLocationService } from 'src/app/core/services/get-all-location.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent {

  currentCarId: number = 0;
  cardetails: any;

  constructor(private getalllocation: GetAllLocationService, private activatedRoute: ActivatedRoute, private route: Router) {

  }
  ngOnInit() {
    this.getCarId();
  }

  getCarId() {

    console.log("snapshot -- ", this.activatedRoute.snapshot.paramMap.get('id'));

    this.activatedRoute.params.subscribe({
      next: (res: any) => {
        console.log("car details file -- ", res.cardetails);
        this.currentCarId = res.cardetails;
        console.log("currrnet car id --", this.currentCarId);
        this.carDetailsdata();
      },
      error: (error: any) => {
        console.log(error)
      }
    })
    // this.getalllocation.getCarDetailsbyId()
  }

  carDetailsdata() {
    this.getalllocation.getCarDetailsbyId(this.currentCarId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.cardetails = res.data;
        console.log("cardeetails img ---", this.cardetails.name);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

}
