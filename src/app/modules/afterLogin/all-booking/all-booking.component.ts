import { Component } from '@angular/core';
import { BookingService } from 'src/app/core/services/booking.service';

@Component({
  selector: 'app-all-booking',
  templateUrl: './all-booking.component.html',
  styleUrls: ['./all-booking.component.scss']
})
export class AllBookingComponent {

  allbokingslist: any[] = [];

  constructor(private bookingservice: BookingService) {

  }
  ngOnInit() {
    this.getallbookings();
  }

  getallbookings() {
    this.bookingservice.getallbookings().subscribe({
      next: (res: any) => {
        console.log("All Bookings --", res.data);
        if (res.result == true) {
          this.allbokingslist = res.data;
        }
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }

  getbookingId(id: number) {
    console.log("booking Id", id);

    this.bookingservice.deletebybookingId(id).subscribe({
      next: (res: any) => {
        if (res.result == true) {
          console.log("deleted");
          this.getallbookings();
        }
      },
      error: (error: any) => {
        console.error(error)
      }
    })
  }
}
