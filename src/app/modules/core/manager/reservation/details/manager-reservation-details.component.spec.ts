import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ManagerReservationDetailsComponent } from './manager-reservation-details.component'

describe('DetailsComponent', () => {
  let component: ManagerReservationDetailsComponent
  let fixture: ComponentFixture<ManagerReservationDetailsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerReservationDetailsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerReservationDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
