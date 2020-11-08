import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '@modules/shared/material.module'
import { DialogComponent } from '@shared/components/dialog/dialog.component'

const sharedComponents = [DialogComponent]
const sharedModules = [FlexLayoutModule, MaterialModule, ReactiveFormsModule]

@NgModule({
  declarations: [...sharedComponents],
  imports: [...sharedModules],
  exports: [...sharedModules],
})
export class SharedModule {}
