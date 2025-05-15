import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllLocationService } from 'src/app/core/services/get-all-location.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  currentLocationId: number = 0;
  carsdata: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private getalllocation: GetAllLocationService) {

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

  // ngOnInit() {
  //   this.getCarsbyLocation();
  // }

  getCarsbyLocation() {
    console.log("from search location id 1st -- ", this.currentLocationId);

    this.getalllocation.getCarsbyLocationId(this.currentLocationId).subscribe({
      next: (res: any) => {
        console.log("from search location id", this.currentLocationId);
        if(res.data.length == 0){
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
    console.log("search file car id", cardid);
    this.router.navigate(['/cardDetails', cardid]);
  }

}
