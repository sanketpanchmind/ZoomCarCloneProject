import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';


@NgModule({
  declarations: [
    PublicComponent,
    PublicHeaderComponent,
    PublicFooterComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
