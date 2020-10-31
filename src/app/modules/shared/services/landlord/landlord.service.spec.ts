import { TestBed } from '@angular/core/testing'
import { PhoneType } from 'src/app/shared/enum/phonetype'
import { Role } from 'src/app/shared/enum/role'
import { Landlord } from 'src/app/shared/models/landlord'
import { LANDLORDS } from 'src/app/shared/models/mock-data/mock-landlord'

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

  it('#getAllLandlords should return all landlords', () => {
    service
      .getAllLandlords()
      .subscribe((landlords) => expect(landlords).toEqual(landlordslist))
  })

  it('#findLandlordById should return landlord by id', () => {
    service
      .findLandlordById(1)
      .subscribe((landlord) => expect(landlord).toEqual(landlordslist[0]))
  })

  it('#deleteLandlord should delete landlord', () => {
    service.deleteLandlord(1)
    expect(LANDLORDS).toEqual([LANDLORDS[0], LANDLORDS[1]])
  })
})
