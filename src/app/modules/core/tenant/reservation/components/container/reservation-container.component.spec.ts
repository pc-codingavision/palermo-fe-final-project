import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { ReservationContainerComponent } from '@modules/core/tenant/reservation/components/container/reservation-container.component'

describe('ReservationContainerComponent', () => {
  let component: ReservationContainerComponent
  let fixture: ComponentFixture<ReservationContainerComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ReservationContainerComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
