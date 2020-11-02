import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ReservationContainerComponent } from '@modules/core/manager/reservation/components/container/reservation-container.component'

describe('ReservationContainerComponent', () => {
  let component: ReservationContainerComponent
  let fixture: ComponentFixture<ReservationContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationContainerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
