import { TestBed } from '@angular/core/testing'
import { PhoneType, Role } from '@shared/enum/enums'
import { Landlord } from '@shared/models/landlord'
import { LANDLORDS_MOCK_DATA } from '@shared/models/mock-data/data'

import { SearchService } from './search.service'

describe('SearchService', () => {
  let service: SearchService
  let buildLandlords: Landlord[]
  const landlord: Landlord = {
    id: 1,
    name: { firstName: 'Piero', surname: 'Cascio' },
    phone: [
      { id: 1, type: PhoneType.Mobile, digits: '3454545' },
      { id: 2, type: PhoneType.Home, digits: '09252525' },
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
    fullName: 'Piero Cascio',
  }

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(SearchService)
    // tslint:disable-next-line: no-shadowed-variable
    buildLandlords = LANDLORDS_MOCK_DATA.map((landlord) =>
      Landlord.Build(landlord)
    ) as Landlord[]
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('#search should return a filtered landlord', () => {
    service
      .search('Piero Cascio', 'piero-landlord@test.com', '3454545')
      .subscribe((land) => expect(land).toBe(void 0))
  })

  it('#getSearchResult should return all landlords', () => {
    service
      .getSearchResult()
      .subscribe((landlords) => expect(landlords).toEqual(buildLandlords))
  })

  it('#phoneSearch should return true', () => {
    expect(service.phoneSearch(landlord, '3454545')).toBeTrue()
  })

  it('#mailSearch should return true', () => {
    expect(service.mailSearch(landlord, 'piero-landlord@test.com')).toBeTrue()
  })

  it('#fullNameSearch should return true', () => {
    expect(service.fullNameSearch(landlord, 'Piero Cascio')).toBeTrue()
  })
})
