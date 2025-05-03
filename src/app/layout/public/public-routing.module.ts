import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  { path: '', component: PublicComponent },
  { path: 'home', loadChildren: () => import('../../modules/beforeLogin/home/home.module').then(m => m.HomeModule) },
  { path: 'search/:locationid', loadChildren: () => import('../../modules/beforeLogin/search/search.module').then(m => m.SearchModule) },
  { path: 'cardDetails/:cardetails', loadChildren: () => import('../../modules/beforeLogin/car-details/car-details.module').then(m => m.CarDetailsModule) },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
