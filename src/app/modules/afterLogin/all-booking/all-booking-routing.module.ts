import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBookingComponent } from './all-booking.component';

const routes: Routes = [{ path: '', component: AllBookingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllBookingRoutingModule { }
