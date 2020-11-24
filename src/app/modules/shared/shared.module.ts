import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '@modules/shared/material.module'
import { DialogComponent } from '@shared/components/dialog/dialog.component'
import { NgImageSliderModule } from 'ng-image-slider'

const sharedComponents = [DialogComponent]
const sharedModules = [
  FlexLayoutModule,
  MaterialModule,
  ReactiveFormsModule,
  NgImageSliderModule,
]

@NgModule({
  declarations: [...sharedComponents],
  imports: [...sharedModules],
  exports: [...sharedModules],
})
export class SharedModule {}
