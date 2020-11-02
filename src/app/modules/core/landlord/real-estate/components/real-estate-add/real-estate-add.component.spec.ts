import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { RealEstateAddComponent } from '@modules/core/landlord/real-estate/components/real-estate-add/real-estate-add.component'

describe('RealEstateAddComponent', () => {
  let component: RealEstateAddComponent
  let fixture: ComponentFixture<RealEstateAddComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RealEstateAddComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateAddComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
