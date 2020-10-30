import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { FacilityFilterComponent } from './facility-filter.component'

describe('FacilityFilterComponent', () => {
  let component: FacilityFilterComponent
  let fixture: ComponentFixture<FacilityFilterComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FacilityFilterComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityFilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
