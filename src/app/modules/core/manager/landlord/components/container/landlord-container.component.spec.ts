import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { LandlordContainerComponent } from './landlord-container.component'

describe('LandlordContainerComponent', () => {
  let component: LandlordContainerComponent
  let fixture: ComponentFixture<LandlordContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandlordContainerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
