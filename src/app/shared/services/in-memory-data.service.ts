import { Injectable } from '@angular/core'
import { IAdvertisement } from '@shared/models/advertisement'
import {
  ADVERTISEMENTS_MOCK_DATA,
  LANDLORDS_MOCK_DATA,
  RESERVATIONS_MOCK_DATA,
} from '@shared/models/mock-data/data'
import { IReservation } from '@shared/models/reservation'
import { IUser } from '@shared/models/users'
import { InMemoryDbService } from 'angular-in-memory-web-api'

import { TENANTS_MOCK_DATA } from './../models/mock-data/data'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const advertisements = ADVERTISEMENTS_MOCK_DATA
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
