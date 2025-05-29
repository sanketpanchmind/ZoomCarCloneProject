import { Component } from '@angular/core';
import { BookingService } from 'src/app/core/services/booking.service';

@Component({
  selector: 'app-all-booking',
  templateUrl: './all-booking.component.html',
  styleUrls: ['./all-booking.component.scss']
})
export class AllBookingComponent {

  allbokingslist: any[] = [];
  pageSize = 10;
  currentPage = 1;
  allbooked = [];
  bookedArray = []; // Data to display in current page


  constructor(private bookingservice: BookingService) {

  }
  ngOnInit() {
    this.getallbookings();
  }

  paginatebookings() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.bookedArray = this.allbooked.slice(start, end);
  }

  changePage(page: number) {
  this.currentPage = page;
  this.paginatebookings();
}

get totalPages(): number[] {
  return Array(Math.ceil(this.allbooked.length / this.pageSize)).fill(0).map((_, i) => i + 1);
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
