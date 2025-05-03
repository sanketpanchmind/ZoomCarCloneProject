import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IApiResponse, IgetLocation } from '../modulesInterfaces/getLocation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllLocationService {

  constructor(private http: HttpClient) { }

  getAllLocation(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>('https://freeapi.miniprojectideas.com/api/ZoomCar/GetAllLocations');
  }


  getCarsbyLocationId(locationId: number): Observable<any> {
    // console.log("from service file -- ", this.http.get('https://freeapi.miniprojectideas.com/api/ZoomCar/GetAllCarsByLocation?id=' + locationId));
    return this.http.get('https://freeapi.miniprojectideas.com/api/ZoomCar/GetAllCarsByLocation?id=' + locationId);
  }

  getCarDetailsbyId(carId: number): Observable<any> {
    return this.http.get('https://freeapi.miniprojectideas.com/api/ZoomCar/GetCarById?id=' + carId);
  }
}
