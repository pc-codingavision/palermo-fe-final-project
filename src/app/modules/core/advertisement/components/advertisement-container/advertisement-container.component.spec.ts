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

  describe('#getAdvertisementsFilteredByPrice', () => {
    it('should return an array of advertisements that match price filter criteria', () => {
      expect(component.getAdvertisementsFilteredByPrice(20)).toContain(mockData[2])
    })

    it('should return an empty array if no advertisement match filter criteria', () => {
      expect(component.getAdvertisementsFilteredByPrice(10).length).toBe(0)
    })
  })

  describe('#getdvertisementsFilteredByScore', () => {
    it('should return an array of advertisements that match score filter criteria', () => {
      expect(component.getAdvertisementsFilteredByScore(4)).toContain(
        mockData[0],
        mockData[1]
      )
    })

    it('should return an empty array if no advertisement match filter criteria', () => {
      expect(component.getAdvertisementsFilteredByScore(8).length).toBe(0)
    })
  })

  describe('#getAdvertisementsFilteredByFacilities', () => {
    const mockFacilitiesObj1 = {
      tv: true,
      wifi: false,
      breakfastIncluded: false,
      parking: false,
      kitchen: false,
      shower: false,
      bath: false,
    }

    const mockFacilitiesObj2 = {
      tv: true,
      wifi: true,
      breakfastIncluded: true,
      parking: true,
      kitchen: true,
      shower: true,
      bath: true,
    }

    it('should return an array of advertisements that match facilities filter criteria', () => {
      expect(component.getAdvertisementsFilteredByFacilities(mockFacilitiesObj1)).toEqual(
        mockData
      )
    })

    it('should return an empty array if no advertisement facilities filter criteria', () => {
      expect(
        component.getAdvertisementsFilteredByFacilities(mockFacilitiesObj2).length
      ).toBe(0)
    })
  })
})
