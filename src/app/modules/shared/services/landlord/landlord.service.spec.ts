import { TestBed } from '@angular/core/testing'
import { PhoneType, Role } from '@shared/enum/enums'
import { LANDLORDS_MOCK_DATA } from '@shared/models/mock-data/data'
import { Landlord } from 'src/app/shared/models/landlord'

import { LandlordService } from './landlord.service'

describe('LandlordService', () => {
  let service: LandlordService
  let buildLandlords: Landlord[]
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
    buildLandlords = LANDLORDS_MOCK_DATA.map((landlord) =>
      Landlord.Build(landlord)
    ) as Landlord[]
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('#getAll should return all landlords', (done: DoneFn) => {
    service.getAll().subscribe((landlords) => expect(landlords).toEqual(buildLandlords))
    done()
  })

  it('#getById should return landlord by id', (done: DoneFn) => {
    service
      .getById(1)
      .subscribe((landlord) => expect(landlord).toEqual(buildLandlords[0]))
    done()
  })

  it('#getdById should return null for not existing id or null', (done: DoneFn) => {
    service.getById(5).subscribe((landlord) => expect(landlord).toBeNull())
    service.getById(null).subscribe((landlord) => expect(landlord).toBeNull())
    done()
  })

  it('#deleteLandlord should delete landlord', () => {
    expect(service.landlords.length).toBe(3)
    service.delete(1)
    expect(service.landlords.length).toBe(2)
    expect(service.landlords).not.toContain(buildLandlords[0])
  })

  it("#delete shouldn't delete a landarlord for not existing id", () => {
    expect(service.landlords.length).toBe(3)
    service.delete(6)
    expect(service.landlords.length).toBe(3)
  })

  it('#add should add a landlord', () => {
    expect(service.landlords.length).toBe(3)
    service.add(defaultLandlord)
    expect(service.landlords.length).toBe(4)
    expect(service.landlords).toContain(defaultLandlord)
  })

  it("#add shouldn't add if we don't pass Landlord ", () => {
    expect(service.landlords.length).toBe(3)
    service.add(null)
    expect(service.landlords.length).toBe(3)
  })

  it('#update should update a landlord and return it', (done: DoneFn) => {
    service
      .update(landlordUpdate)
      .subscribe(() => expect(service.landlords).not.toEqual(LANDLORDS_MOCK_DATA))
    done()
  })

  it("#update shouldn't update if we don't pass landlord", (done: DoneFn) => {
    service
      .update(null)
      .subscribe(() => expect(service.landlords).toEqual(LANDLORDS_MOCK_DATA))
    done()
  })

  it('#toggleStatus should change the Landlord status', (done: DoneFn) => {
    const status = service.landlords[0].status
    service
      .toggleStatus(1)
      .subscribe(() => expect(service.landlords[0].status).not.toEqual(status))
    done()
  })

  // it('#genId should generate a new id', () => {
  //   expect(service.genId()).toEqual(4)
  //   service.landlords = []
  //   expect(service.genId()).toEqual(1)
  // })
})
