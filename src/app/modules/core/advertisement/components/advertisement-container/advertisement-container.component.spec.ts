import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdvertisementContainerComponent } from './advertisement-container.component'

describe('AdvertismentContainerComponent', () => {
  let component: AdvertisementContainerComponent
  let fixture: ComponentFixture<AdvertisementContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisementContainerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
