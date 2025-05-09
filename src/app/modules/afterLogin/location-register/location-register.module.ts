import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRegisterRoutingModule } from './location-register-routing.module';
import { LocationRegisterComponent } from './location-register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LocationRegisterComponent
  ],
  imports: [
    CommonModule,
    LocationRegisterRoutingModule,
    ReactiveFormsModule
  ]
})
export class LocationRegisterModule { }
