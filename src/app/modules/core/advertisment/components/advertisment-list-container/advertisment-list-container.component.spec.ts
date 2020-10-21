import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { AdvertismentListContainerComponent } from './advertisment-list-container.component'

describe('AdvertismentListContainerComponent', () => {
  let component: AdvertismentListContainerComponent
  let fixture: ComponentFixture<AdvertismentListContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertismentListContainerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertismentListContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
