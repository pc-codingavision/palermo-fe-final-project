import { TestBed } from '@angular/core/testing'

import { ADVERTISEMENTS_MOCK_DATA } from './../../../shared/models/mock-data/data'
import { AdvertisementService } from './advertisement.service'

describe('AdvertisementService', () => {
  let service: AdvertisementService
  const mockPriceFilter = [
    {
      id: 3,
      landlordId: 3,
      propertyId: 3,
      reviews: [
        {
          title: 'Not great',
          tenantId: 1,
          description: 'The hostel was very very chaotic',
          vote: 1.5,
        },
        {
          title: 'Terrible',
          tenantId: 2,
          description: 'Very busy and people without masks',
          vote: 2,
        },
      ],
      price: 20,
    },
  ]

  const mockFindById = {
    id: 1,
    landlordId: 1,
    propertyId: 1,
    reviews: [
      {
        title: 'Fantastic vacation',
        tenantId: 1,
        description: 'Fantastic vacation. Perfect house',
        vote: 4.5,
      },
      {
        title: 'Good',
        tenantId: 2,
        description: 'Nice house, very very clean',
        vote: 4,
      },
    ],
    price: 40,
  }

  const mockMaxPrice = 40

  const mockMinPrice = 20

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AdvertisementService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return all advertisements', () => {
    expect(
      service
        .findAll()
        .subscribe((advertisements) =>
          expect(advertisements).toEqual(ADVERTISEMENTS_MOCK_DATA)
        )
    )
  })

  xit('should return specific advertisement based on the passed id', () => {
    expect(
      service
        .findById(1)
        .subscribe((advertisement) => expect(advertisement).toEqual(mockFindById))
    )
  })

  xit('should return filtered advertisements', () => {
    expect(
      service
        .returnPriceFilteredAdvertisements(20)
        .subscribe((filteredAdvertisements) =>
          expect(filteredAdvertisements).toEqual(mockPriceFilter)
        )
    )
  })

  it('should return the highest price between advertisements', () => {
    expect(
      service
        .findAdvertisementsHighestPrice()
        .subscribe((filteredAdvertisementPrice) =>
          expect(filteredAdvertisementPrice).toEqual(mockMaxPrice)
        )
    )
  })

  it('should return the lowest price between advertisements', () => {
    expect(
      service
        .findAdvertisementsLowestPrice()
        .subscribe((filteredAdvertisementPrice) =>
          expect(filteredAdvertisementPrice).toEqual(mockMinPrice)
        )
    )
  })
})
