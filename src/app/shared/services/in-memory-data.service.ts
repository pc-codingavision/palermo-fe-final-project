import { Injectable } from '@angular/core'
import { IAdvertisement } from '@shared/models/advertisement'
import { Advertisement } from '@shared/models/advertisement'
import { Landlord } from '@shared/models/landlord'
import {
  ADVERTISEMENTS_MOCK_DATA,
  LANDLORDS_MOCK_DATA,
} from '@shared/models/mock-data/data'
import { IUser } from '@shared/models/users'
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const advertisements = ADVERTISEMENTS_MOCK_DATA.map((advertisement) =>
      Advertisement.Build(advertisement)
    )
    const landlords = LANDLORDS_MOCK_DATA.map((landlord) => Landlord.Build(landlord))
    return { advertisements, landlords }
  }

  genId<T extends IAdvertisement | IUser>(dataArray: T[]): number {
    return dataArray.length > 0 ? Math.max(...dataArray.map((data) => data.id)) + 1 : 1
  }

  constructor() {}
}
