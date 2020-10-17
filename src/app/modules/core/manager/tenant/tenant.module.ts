import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantRoutingModule } from './tenant-routing.module';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [ListComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    TenantRoutingModule
  ]
})
export class TenantModule { }
