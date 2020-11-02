import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { ReservationListComponent } from '@modules/core/manager/reservation/components/list/reservation-list.component'

describe('ReservationListComponent', () => {
  let component: ReservationListComponent
  let fixture: ComponentFixture<ReservationListComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ReservationListComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
