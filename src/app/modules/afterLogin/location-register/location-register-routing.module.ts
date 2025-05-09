import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationRegisterComponent } from './location-register.component';

const routes: Routes = [{ path: '', component: LocationRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRegisterRoutingModule { }
