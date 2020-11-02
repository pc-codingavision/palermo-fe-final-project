import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { ProfileContainerComponent } from '@modules/core/landlord/landlord-profile/components/landlord-profile-container/landlord-profile-container.component'

describe('ProfileContainerComponent', () => {
  let component: ProfileContainerComponent
  let fixture: ComponentFixture<ProfileContainerComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ProfileContainerComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
