import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatSnackBar } from '@angular/material/snack-bar'

import { SearchComponent } from './search.component'

describe('SearchComponent', () => {
  let component: SearchComponent
  let fixture: ComponentFixture<SearchComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SearchComponent],
        imports: [MatAutocompleteModule],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
