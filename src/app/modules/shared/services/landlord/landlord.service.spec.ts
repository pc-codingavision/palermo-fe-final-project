import { TestBed } from '@angular/core/testing'
import { Role } from '@shared/enum/enums'
import { LANDLORDS_MOCK_DATA } from '@shared/models/mock-data/data'
import { Landlord } from 'src/app/shared/models/landlord'

import { LandlordService } from './landlord.service'

describe('LandlordService', () => {
  let service: LandlordService
  let landlordsList
  const defaultLandlord = {
    id: null,
    name: { firstName: '', middleName: '', surname: '' },
    phone: [],
    mail: '',
    picture: '',
    username: '',
    password: '',
    status: false,
    dateOfBirth: null,
    role: Role.Landlord,
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postCode: '',
    },
    fullName: '',
  }
  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(LandlordService)
    landlordsList = LANDLORDS_MOCK_DATA.map((landlord) => Landlord.Build(landlord))
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('#getAllLandlords should return all landlords', () => {
    service.getAll().subscribe((landlords) => expect(landlords).toEqual(landlordsList))
  })

  it('#getById should return landlord by id', () => {
    service.getById(1).subscribe((landlord) => expect(landlord).toEqual(landlordsList[0]))
  })

  it('#getdById should return default Landlord for not exisisting id or null', () => {
    service
      .getById(5)
      .subscribe((landlord) => expect(landlord).toEqual(Landlord.Build(defaultLandlord)))

    service
      .getById(null)
      .subscribe((landlord) => expect(landlord).toEqual(Landlord.Build(defaultLandlord)))
  })

  xit('#deleteLandlord should delete landlord', () => {
    service.delete(1)
    expect(LANDLORDS_MOCK_DATA).toEqual([LANDLORDS_MOCK_DATA[0], LANDLORDS_MOCK_DATA[1]])
  })
})
