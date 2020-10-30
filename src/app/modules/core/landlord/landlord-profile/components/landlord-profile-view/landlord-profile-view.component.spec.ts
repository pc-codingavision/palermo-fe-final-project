import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LandlordProfileViewComponent } from './landlord-profile-view.component'

describe('LandlordProfileViewComponent', () => {
  let component: LandlordProfileViewComponent
  let fixture: ComponentFixture<LandlordProfileViewComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandlordProfileViewComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordProfileViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
