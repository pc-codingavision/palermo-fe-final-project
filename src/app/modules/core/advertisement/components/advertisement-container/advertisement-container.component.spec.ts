import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { AdvertisementContainerComponent } from '@modules/core/advertisement/components/advertisement-container/advertisement-container.component'

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
