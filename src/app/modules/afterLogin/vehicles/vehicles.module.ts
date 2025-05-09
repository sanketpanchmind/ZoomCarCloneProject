import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VehiclesComponent,
    VehicleDetailsComponent,
    AddVehicleComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    ReactiveFormsModule
  ]
})
export class VehiclesModule { }
