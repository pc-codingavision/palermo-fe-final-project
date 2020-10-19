import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ManagerLandlordEditComponent } from './manager-landlord-edit.component'

describe('EditComponent', () => {
  let component: ManagerLandlordEditComponent
  let fixture: ComponentFixture<ManagerLandlordEditComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerLandlordEditComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerLandlordEditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
