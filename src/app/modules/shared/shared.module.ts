import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '@modules/shared/material.module'

const sharedModules = [FlexLayoutModule, MaterialModule, ReactiveFormsModule]

@NgModule({
  declarations: [],
  imports: [...sharedModules],
  exports: [...sharedModules],
})
export class SharedModule {}
