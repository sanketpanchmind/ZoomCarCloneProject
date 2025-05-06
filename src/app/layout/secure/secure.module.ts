import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { SecureHeaderComponent } from './secure-header/secure-header.component';
import { SecureFooterComponent } from './secure-footer/secure-footer.component';
import { PublicModule } from '../public/public.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SecureComponent,
    // SecureHeaderComponent,
    // SecureFooterComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    PublicModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
