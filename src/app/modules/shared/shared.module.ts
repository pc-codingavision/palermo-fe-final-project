import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '@modules/shared/material.module'
import { DialogComponent } from '@shared/components/dialog/dialog.component'
import { SpinnerComponent } from '@shared/components/spinner/spinner.component'
import { CommonModule } from '@angular/common'

const sharedComponents = [DialogComponent, SpinnerComponent]
const sharedModules = [
  FlexLayoutModule,
  MaterialModule,
  ReactiveFormsModule,
  CommonModule,
]

@NgModule({
  declarations: [...sharedComponents],
  imports: [...sharedModules],
  exports: [...sharedModules, ...sharedComponents],
})
export class SharedModule {}
