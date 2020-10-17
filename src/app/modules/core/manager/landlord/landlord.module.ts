import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandlordRoutingModule } from './landlord-routing.module';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [ListComponent, NewComponent],
  imports: [
    CommonModule,
    LandlordRoutingModule
  ]
})
export class LandlordModule { }
