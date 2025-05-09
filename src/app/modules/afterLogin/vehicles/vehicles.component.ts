import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/core/services/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {

  allCars: any = [];

  constructor(private vehicleService: VehicleService, private router: Router) {

  }
  ngOnInit() {
    this.getAllVehicles();
  }

  getAllVehicles() {
    this.vehicleService.getAllVehicles().subscribe({
      next: (res: any) => {
        if (res.result == true) {
          console.log("Vehicles fetched successfully", res.data);
          this.allCars = res.data;
        }
      },
      error: (err: any) => {
        console.error("Error fetching vehicles", err);
      }
    })
  }

  hideimage(event: Event) {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
  }

  deleteCardbyId(id: number) {
    this.vehicleService.deleteCarById(id).subscribe({
      next: (res: any) => {
        if (res.result == true)
          console.log("Car deleted successfully", res.result);
      },
      error: (err: any) => {
        console.error("Error deleting car", err);
      }
    })
  }

  cardetails(id: number) {
    console.log(id);
    this.router.navigate(['/cardDetails', id]);
  }

}
