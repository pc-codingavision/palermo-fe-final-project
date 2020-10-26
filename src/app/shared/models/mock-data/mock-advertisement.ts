import { IAdvertisement } from '../advertisement'

export const advertisements: IAdvertisement[] = [
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
    propertyId: 3,
    reviews: [
      {
        title: 'Good',
        tenantId: 3,
        description: 'Very spacious and accessible house',
        vote: 4.5,
      },
    ],
  },
  {
    landlordId: 3,
    propertyId: 4,
    reviews: [
      {
        title: 'Not great',
        tenantId: 4,
        description: 'The hostel was very very chaotic',
        vote: 1.5,
      },
      {
        title: 'Terrible',
        tenantId: 5,
        description: 'Very busy and people without masks',
        vote: 2,
      },
    ],
  },
  {
    landlordId: 4,
    propertyId: 2,
    reviews: [
      {
        title: 'Fantastic',
        tenantId: 6,
        description: 'Very spacious and clean house',
        vote: 5,
      },
      {
        title: 'Perfect',
        tenantId: 7,
        description: 'Very friendly people',
        vote: 4.5,
      },
      {
        title: 'Superb',
        tenantId: 8,
        description: 'Very modern house',
        vote: 5,
      },
    ],
  },
]
