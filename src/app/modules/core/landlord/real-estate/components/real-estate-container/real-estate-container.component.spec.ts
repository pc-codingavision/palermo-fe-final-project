import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { RealEstateContainerComponent } from '@modules/core/landlord/real-estate/components/real-estate-container/real-estate-container.component'

describe('RealestateContainerComponent', () => {
  let component: RealEstateContainerComponent
  let fixture: ComponentFixture<RealEstateContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RealEstateContainerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
