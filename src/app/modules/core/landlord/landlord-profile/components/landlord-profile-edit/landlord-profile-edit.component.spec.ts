import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { LandlordProfileEditComponent } from './landlord-profile-edit.component'

describe('LandlordProfileEditComponent', () => {
  let component: LandlordProfileEditComponent
  let fixture: ComponentFixture<LandlordProfileEditComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandlordProfileEditComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordProfileEditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
