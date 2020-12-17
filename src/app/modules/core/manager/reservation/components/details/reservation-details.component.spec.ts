import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { ReservationDetailsComponent } from '@modules/core/manager/reservation/components/details/reservation-details.component'
import { commonTestingModules } from '@shared/common.testing'

describe('ReservationDetailsComponent', () => {
  let component: ReservationDetailsComponent
  let fixture: ComponentFixture<ReservationDetailsComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ReservationDetailsComponent],
        imports: [commonTestingModules],
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
