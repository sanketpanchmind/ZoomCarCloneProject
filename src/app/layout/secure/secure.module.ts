import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { SecureHeaderComponent } from './secure-header/secure-header.component';
import { SecureFooterComponent } from './secure-footer/secure-footer.component';


@NgModule({
  declarations: [
    SecureComponent,
    SecureHeaderComponent,
    SecureFooterComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
