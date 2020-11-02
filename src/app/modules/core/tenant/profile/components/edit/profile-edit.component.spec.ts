import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { ProfileEditComponent } from '@modules/core/tenant/profile/components/edit/profile-edit.component'

describe('ProfileEditComponent', () => {
  let component: ProfileEditComponent
  let fixture: ComponentFixture<ProfileEditComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ProfileEditComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
