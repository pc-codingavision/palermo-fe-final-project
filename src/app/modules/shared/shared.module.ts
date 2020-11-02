import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from './material.module'

const sharedModules = [MaterialModule, FlexLayoutModule, ReactiveFormsModule]

@NgModule({
  declarations: [],
  imports: [...sharedModules],
})
export class SharedModule {}
