import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllBookingRoutingModule } from './all-booking-routing.module';
import { AllBookingComponent } from './all-booking.component';


@NgModule({
  declarations: [
    AllBookingComponent
  ],
  imports: [
    CommonModule,
    AllBookingRoutingModule
  ]
})
export class AllBookingModule { }
