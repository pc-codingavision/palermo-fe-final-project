import { Injectable } from '@angular/core'
import { IAdvertisement } from '@shared/models/advertisement'
import { ADVERTISEMENTS_MOCK_DATA } from '@shared/models/mock-data/data'
import { InMemoryDbService } from 'angular-in-memory-web-api'

import { TENANTS_MOCK_DATA } from './../models/mock-data/data'
import { IUser } from './../models/users'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const advertisements = ADVERTISEMENTS_MOCK_DATA
    const tenants = TENANTS_MOCK_DATA
    return { advertisements, tenants }
  }

  genId<T extends IAdvertisement | IUser>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map((t) => t.id)) + 1 : 1
  }

  constructor() {}
}
