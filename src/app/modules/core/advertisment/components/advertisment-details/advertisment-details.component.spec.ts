import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { AdvertismentDetailsComponent } from './advertisment-details.component'

describe('AdvertismentDetailsComponent', () => {
  let component: AdvertismentDetailsComponent
  let fixture: ComponentFixture<AdvertismentDetailsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertismentDetailsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertismentDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
