import { ComponentFixture, TestBed, async, waitForAsync } from '@angular/core/testing'

import { ReservationDetailsComponent } from '@modules/core/manager/reservation/components/details/reservation-details.component'

describe('ReservationDetailsComponent', () => {
  let component: ReservationDetailsComponent
  let fixture: ComponentFixture<ReservationDetailsComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ReservationDetailsComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
