import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { AdvertisementDetailsComponent } from './advertisement-details.component'

describe('AdvertisementDetailsComponent', () => {
  let component: AdvertisementDetailsComponent
  let fixture: ComponentFixture<AdvertisementDetailsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisementDetailsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
