import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from './material.module'

const sharedModules = [MaterialModule, FlexLayoutModule]

@NgModule({
  declarations: [],
  imports: [...sharedModules],
})
export class SharedModule {}
