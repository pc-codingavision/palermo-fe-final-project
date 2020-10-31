import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { DatepickerComponent } from './datepicker.component'

describe('DatesComponent', () => {
  let component: DatepickerComponent
  let fixture: ComponentFixture<DatepickerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
