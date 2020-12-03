import { NgModule } from '@angular/core'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSliderModule } from '@angular/material/slider'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatTableModule } from '@angular/material/table'
import { MatTabsModule } from '@angular/material/tabs'
import { MatToolbarModule } from '@angular/material/toolbar'

const modules = [
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatIconModule,
  MatDialogModule,
  MatDatepickerModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatGridListModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSnackBarModule,
  MatSliderModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatProgressSpinnerModule,
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}
