import { Injectable } from '@angular/core'
import { MOCKADVERTISEMENTS_MOCK_DATA } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { IAdvertisement } from '@shared/models/advertisement'
import {
  LANDLORDS_MOCK_DATA,
  RESERVATIONS_MOCK_DATA,
  TENANTS_MOCK_DATA,
} from '@shared/models/mock-data/data'
import { IReservation } from '@shared/models/reservation'
import { IUser } from '@shared/models/users'
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const advertisements = MOCKADVERTISEMENTS_MOCK_DATA
    const landlords = LANDLORDS_MOCK_DATA
    const reservations = RESERVATIONS_MOCK_DATA
    const tenants = TENANTS_MOCK_DATA
    return { advertisements, landlords, reservations, tenants }
  }

  genId<T extends IAdvertisement | IUser | IReservation>(dataArray: T[]): number {
    return dataArray.length > 0 ? Math.max(...dataArray.map((data) => data.id)) + 1 : 1
  }

  constructor() {}
}
