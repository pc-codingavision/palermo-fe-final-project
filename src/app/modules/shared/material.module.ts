import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'

const modules = [MatIconModule]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}
