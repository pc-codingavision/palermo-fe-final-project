import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ReservationDetailsComponent } from './reservation-details.component'

describe('ReservationDetailsComponent', () => {
  let component: ReservationDetailsComponent
  let fixture: ComponentFixture<ReservationDetailsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationDetailsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
