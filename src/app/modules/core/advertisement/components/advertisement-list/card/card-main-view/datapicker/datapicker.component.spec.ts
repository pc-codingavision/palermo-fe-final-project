import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { DatapickerComponent } from './datapicker.component'

describe('DatesComponent', () => {
  let component: DatapickerComponent
  let fixture: ComponentFixture<DatapickerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatapickerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapickerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
