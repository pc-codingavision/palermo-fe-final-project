import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { AdvertisementContainerComponent } from '@modules/core/advertisement/components/advertisement-container/advertisement-container.component'
import {
  MOCKADVERTISEMENTS_MOCK_DATA,
  MockAdvertisement,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

describe('AdvertismentContainerComponent', () => {
  let component: AdvertisementContainerComponent
  let fixture: ComponentFixture<AdvertisementContainerComponent>
  let mockData: MockAdvertisement[]

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AdvertisementContainerComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    mockData = MOCKADVERTISEMENTS_MOCK_DATA.map((advertisement) =>
      MockAdvertisement.Build(advertisement)
    )
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
