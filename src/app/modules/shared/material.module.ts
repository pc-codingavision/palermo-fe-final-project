import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDividerModule } from '@angular/material/divider'
import { MatSliderModule } from '@angular/material/slider'

const modules = [MatSliderModule, MatCardModule, MatDividerModule, MatCheckboxModule]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}
