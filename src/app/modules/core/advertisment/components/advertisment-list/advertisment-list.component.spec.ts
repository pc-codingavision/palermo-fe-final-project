import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { AdvertismentListComponent } from './advertisment-list.component'

describe('AdvertismentListComponent', () => {
  let component: AdvertismentListComponent
  let fixture: ComponentFixture<AdvertismentListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertismentListComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertismentListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
