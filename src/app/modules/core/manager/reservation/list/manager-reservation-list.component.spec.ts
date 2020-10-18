import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ManagerReservationListComponent } from './manager-reservation-list.component'

describe('ListComponent', () => {
  let component: ManagerReservationListComponent
  let fixture: ComponentFixture<ManagerReservationListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerReservationListComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerReservationListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
