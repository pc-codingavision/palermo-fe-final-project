import { TestBed } from '@angular/core/testing'
import { Role } from '@shared/enum/enums'
import { LANDLORDS_MOCK_DATA } from '@shared/models/mock-data/data'
import { cloneDeep } from 'lodash'
import { Landlord } from 'src/app/shared/models/landlord'

import { LandlordService } from './landlord.service'

describe('LandlordService', () => {
  let service: LandlordService
  let buildLandlordsList
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
    buildLandlordsList = LANDLORDS_MOCK_DATA.map((landlord) => Landlord.Build(landlord))
    landlordsList = cloneDeep(LANDLORDS_MOCK_DATA)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('#getAllLandlords should return all landlords', (done: DoneFn) => {
    service
      .getAll()
      .subscribe((landlords) => expect(landlords).toEqual(buildLandlordsList))
    done()
  })

  it('#getById should return landlord by id', (done: DoneFn) => {
    service
      .getById(1)
      .subscribe((landlord) => expect(landlord).toEqual(buildLandlordsList[0]))
    done()
  })

  it('#getdById should return default Landlord for not existing id or null', (done: DoneFn) => {
    service
      .getById(5)
      .subscribe((landlord) => expect(landlord).toEqual(Landlord.Build(defaultLandlord)))

    service
      .getById(null)
      .subscribe((landlord) => expect(landlord).toEqual(Landlord.Build(defaultLandlord)))
    done()
  })

  xit('#deleteLandlord should delete landlord', () => {
    expect(LANDLORDS_MOCK_DATA.length).toBe(landlordsList.length)
    service.delete(1)
    expect(LANDLORDS_MOCK_DATA.length).toBe(landlordsList.length - 1)
    expect(LANDLORDS_MOCK_DATA).not.toContain(landlordsList[0])
  })

  xit("#delete shouldn't delete a landarlord for not existing id", () => {
    expect(landlordsList.length).toBe(3)
    service.delete(6)
    expect(landlordsList.length).toBe(3)
  })

  xit('#add should add a landlord', () => {
    expect(landlordsList.length).toBe(3)
    service.add(defaultLandlord)
    expect(LANDLORDS_MOCK_DATA.length).toBe(4)
    expect(LANDLORDS_MOCK_DATA).toContain(defaultLandlord)
  })
})
