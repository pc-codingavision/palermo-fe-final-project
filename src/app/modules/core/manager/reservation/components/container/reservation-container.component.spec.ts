import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { ReservationContainerComponent } from '@modules/core/manager/reservation/components/container/reservation-container.component'
import { commonTestingModules } from '@shared/common.testing'

describe('ReservationContainerComponent', () => {
  let component: ReservationContainerComponent
  let fixture: ComponentFixture<ReservationContainerComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ReservationContainerComponent],
        imports: [commonTestingModules],
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
