import { TestBed } from '@angular/core/testing'
import { PhoneType, Role } from '@shared/enum/enums'
import { LANDLORDS_MOCK_DATA } from '@shared/models/mock-data/data'
import { cloneDeep } from 'lodash'
import { Landlord } from 'src/app/shared/models/landlord'

import { LandlordService } from './landlord.service'

describe('LandlordService', () => {
  let service: LandlordService
  let buildLandlordsList
  let landlordsList
  const landlordUpdate: Landlord = {
    id: 1,
    name: { firstName: 'Pino', surname: 'Cascio' },
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
    fullName: '',
  }
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
    console.log(LANDLORDS_MOCK_DATA)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  xit('#getAllLandlords should return all landlords', (done: DoneFn) => {
    service
      .getAll()
      .subscribe((landlords) => expect(landlords).toEqual(buildLandlordsList))
    done()
  })

  xit('#getById should return landlord by id', (done: DoneFn) => {
    service
      .getById(1)
      .subscribe((landlord) => expect(landlord).toEqual(buildLandlordsList[0]))
    done()
  })

  xit('#getdById should return default Landlord for not existing id or null', (done: DoneFn) => {
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

  xit('#update should update a landlord and return it', () => {
    service
      .update(landlordUpdate)
      .subscribe(() => expect(buildLandlordsList[0]).not.toEqual(landlordUpdate))
  })

  xit('#toggleStatus should change the Landlord status', () => {
    const status = LANDLORDS_MOCK_DATA[0].status
    service
      .toggleStatus(1)
      .subscribe(() => expect(LANDLORDS_MOCK_DATA[0].status).not.toEqual(status))
  })
})
