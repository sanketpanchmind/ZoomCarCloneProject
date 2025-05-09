import { AddVehicleComponent } from './../../modules/afterLogin/vehicles/add-vehicle/add-vehicle.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AddVehicleComponent } from '../../modules/afterLogin/vehicles/add-vehicle/add-vehicle.component';
import { VehicleDetailsComponent } from '../../modules/afterLogin/vehicles/vehicle-details/vehicle-details.component';
import { SecureComponent } from './secure.component';

const routes: Routes = [
  { path: '', component: SecureComponent },
  { path: 'dashboard', loadChildren: () => import('../../modules/afterLogin/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'all-booking', loadChildren: () => import('../../modules/afterLogin/all-booking/all-booking.module').then(m => m.AllBookingModule) },
  { path: 'vehicles', loadChildren: () => import('../../modules/afterLogin/vehicles/vehicles.module').then(m => m.VehiclesModule) },
  // { path: 'add-vehicle', component: AddVehicleComponent, loadChildren: () => import('../../modules/afterLogin/vehicles/add-vehicle/add-vehicle.component').then(m => m.AddVehicleComponent) },
  {
    path: 'vehicles',
    children: [
      {
        path: 'add-vehicle',
        component: AddVehicleComponent
      }
    ]
  },
  { path: 'locationRegister', loadChildren: () => import('../../modules/afterLogin/location-register/location-register.module').then(m => m.LocationRegisterModule) },


  // { path: 'vehicle-details/:id', component: VehicleDetailsComponent, loadChildren: () => import('../../modules/afterLogin/vehicles/vehicle-details/vehicle-details.component').then(m => m.VehicleDetailsComponent) },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
