import { TestBed } from '@angular/core/testing'
import { PhoneType, Role } from '@shared/enum/enums'
import { LANDLORDS_MOCK_DATA } from '@shared/models/mock-data/data'
import { Landlord } from 'src/app/shared/models/landlord'

import { LandlordService } from './landlord.service'

describe('LandlordService', () => {
  let service: LandlordService
  const landlordslist = [
    Landlord.Build({
      id: 1,
      name: { firstName: 'Piero', surname: 'Cascio' },
      phone: [
        { id: 1, type: PhoneType.Work, digits: '3454545' },
        { id: 2, type: PhoneType.Mobile, digits: '3454545889' },
      ],
      mail: 'piero-landlord@test.com',
      picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
      username: 'landlord1',
      password: 'password',
      status: true,
      dateOfBirth: new Date(1980, 10, 10),
      role: Role.Landlord,
      address: {
        line1: 'Via delle Magnolie',
        city: 'Palermo',
        state: 'italia',
        postCode: '90100',
      },
    }),

    Landlord.Build({
      id: 2,
      name: { firstName: 'Cosimo', surname: 'Nigrelli' },
      phone: [
        { id: 2, type: PhoneType.Home, digits: '213455' },
        { id: 1, type: PhoneType.Work, digits: '' },
      ],
      mail: 'cosimo-landlord@test.com',
      picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
      username: 'landlord2',
      password: 'password',
      status: true,
      dateOfBirth: new Date(1982, 10, 10),
      role: Role.Landlord,
      address: {
        line1: 'Via Roma',
        city: 'Messina',
        state: 'italia',
        postCode: '90100',
      },
    }),

    Landlord.Build({
      id: 3,
      name: { firstName: 'Vito', surname: 'Rizzo' },
      phone: [
        { id: 1, type: PhoneType.Work, digits: '142354' },
        { id: 2, type: PhoneType.Home, digits: '' },
      ],
      mail: 'vito-landlord@test.com',
      picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
      username: 'landlord3',
      password: 'password',
      status: true,
      dateOfBirth: new Date(1984, 10, 1),
      role: Role.Landlord,
      address: {
        line1: 'Via dei Cappuccini',
        city: 'Ragusa',
        state: 'italia',
        postCode: '90100',
      },
    }),
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(LandlordService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  xit('#getAllLandlords should return all landlords', () => {
    service.getAll().subscribe((landlords) => expect(landlords).toEqual(landlordslist))
  })

  xit('#findLandlordById should return landlord by id', () => {
    service.getById(1).subscribe((landlord) => expect(landlord).toEqual(landlordslist[0]))
  })

  xit('#deleteLandlord should delete landlord', () => {
    service.delete(1)
    expect(LANDLORDS_MOCK_DATA).toEqual([LANDLORDS_MOCK_DATA[0], LANDLORDS_MOCK_DATA[1]])
  })
})
