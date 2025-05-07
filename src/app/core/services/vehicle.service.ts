import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  ngOnInit(){

  }

  getAllVehicles(): Observable<any>{
    return this.http.get('https://freeapi.miniprojectideas.com/api/ZoomCar/GetAllCars');
  }

  deleteCarById(id: number): Observable<any>{
    return this.http.delete('https://freeapi.miniprojectideas.com/api/ZoomCar/DeleteCarById?id='+ id);
  }
}
