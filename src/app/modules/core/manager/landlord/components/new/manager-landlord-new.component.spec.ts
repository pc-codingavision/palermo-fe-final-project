import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ManagerLandlordNewComponent } from './manager-landlord-new.component'

describe('NewComponent', () => {
  let component: ManagerLandlordNewComponent
  let fixture: ComponentFixture<ManagerLandlordNewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerLandlordNewComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerLandlordNewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
