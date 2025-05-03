import { HttpClientModule } from '@angular/common/http';
import { IApiResponse, IgetLocation } from './../../../core/modulesInterfaces/getLocation.model';
import { Component } from '@angular/core';
import { GetAllLocationService } from 'src/app/core/services/get-all-location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  getAlllocationsArray: IgetLocation[] = [];
  selectedLocation!: IgetLocation;

  constructor(private getLocation: GetAllLocationService, private router: Router, private http: HttpClientModule) {

  }
  ngOnInit() {
    this.getAllLocation();
  }

  getAllLocation() {
    this.getLocation.getAllLocation().subscribe({
      next: (res: IApiResponse) => {
        console.log(res.data);
        this.getAlllocationsArray = res.data;
      }
    })
  }

  getSearchData(locationId: string) {
    console.log("from search fn -- ", locationId);
    this.router.navigate(['/search', locationId])
  }


}
