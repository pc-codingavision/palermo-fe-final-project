import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { RealEstateListComponent } from '@modules/core/landlord/real-estate/components/real-estate-list/real-estate-list.component'

describe('RealestateListComponent', () => {
  let component: RealEstateListComponent
  let fixture: ComponentFixture<RealEstateListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RealEstateListComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
