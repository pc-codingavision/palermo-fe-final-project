import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ProfileContainerComponent } from '@modules/core/tenant/profile/components/container/profile-container.component'

describe('ProfileContainerComponent', () => {
  let component: ProfileContainerComponent
  let fixture: ComponentFixture<ProfileContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileContainerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
