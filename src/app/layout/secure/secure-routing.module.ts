import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponent } from './secure.component';

const routes: Routes = [
  { path: '', component: SecureComponent },
  { path: 'dashboard', loadChildren: () => import('../../modules/afterLogin/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'all-booking', loadChildren: () => import('../../modules/afterLogin/all-booking/all-booking.module').then(m => m.AllBookingModule) },
  { path: 'vehicles', loadChildren: () => import('../../modules/afterLogin/vehicles/vehicles.module').then(m => m.VehiclesModule) },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
