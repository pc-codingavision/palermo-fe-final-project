import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { LandlordProfileViewComponent } from '@modules/core/landlord/landlord-profile/components/landlord-profile-view/landlord-profile-view.component'

describe('LandlordProfileViewComponent', () => {
  let component: LandlordProfileViewComponent
  let fixture: ComponentFixture<LandlordProfileViewComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LandlordProfileViewComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordProfileViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
