import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ProfileEditComponent } from '@modules/core/tenant/profile/components/edit/profile-edit.component'

describe('ProfileEditComponent', () => {
  let component: ProfileEditComponent
  let fixture: ComponentFixture<ProfileEditComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileEditComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
