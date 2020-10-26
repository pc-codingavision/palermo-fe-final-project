import { IAdvertisement } from '../advertisement'

export const ADVERTISEMENTS: IAdvertisement[] = [
  {
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
  },
  {
    landlordId: 2,
    propertyId: 2,
    reviews: [
      {
        title: 'Good',
        tenantId: 2,
        description: 'Very spacious and accessible house',
        vote: 4.5,
      },
    ],
  },
  {
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
  },
]
