import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ManagerLandlordListComponent } from './manager-landlord-list.component'

describe('ListComponent', () => {
  let component: ManagerLandlordListComponent
  let fixture: ComponentFixture<ManagerLandlordListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerLandlordListComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerLandlordListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
