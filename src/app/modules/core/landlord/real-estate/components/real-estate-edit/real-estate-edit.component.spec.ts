import { ComponentFixture, TestBed, async, waitForAsync } from '@angular/core/testing'

import { RealEstateEditComponent } from '@modules/core/landlord/real-estate/components/real-estate-edit/real-estate-edit.component'

describe('RealestateEditComponent', () => {
  let component: RealEstateEditComponent
  let fixture: ComponentFixture<RealEstateEditComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RealEstateEditComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateEditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
