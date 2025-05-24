import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }

  getallbookings(): Observable<any> {
    return this.http.get('https://freeapi.miniprojectideas.com/api/ZoomCar/GetAllBookings');
  }

  deletebybookingId(id: number): Observable<any> {
    return this.http.delete('https://freeapi.miniprojectideas.com/api/ZoomCar/DeleteBookingById?id=' + id);
  }
}
