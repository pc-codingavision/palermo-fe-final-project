import { ComponentFixture, TestBed, async, waitForAsync } from '@angular/core/testing'

import { ProfileViewComponent } from '@modules/core/tenant/profile/components/view/profile-view.component'

describe('ProfileViewComponent', () => {
  let component: ProfileViewComponent
  let fixture: ComponentFixture<ProfileViewComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ProfileViewComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
