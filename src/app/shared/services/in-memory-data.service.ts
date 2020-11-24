import { Injectable } from '@angular/core'
import { IAdvertisement } from '@shared/models/advertisement'
import { ADVERTISEMENTS_MOCK_DATA } from '@shared/models/mock-data/data'
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const advertisements = ADVERTISEMENTS_MOCK_DATA
    return { advertisements }
  }

  genId(advertisements: IAdvertisement[]): number {
    return advertisements.length > 0
      ? Math.max(...advertisements.map((adv) => adv.id)) + 1
      : 1
  }

  constructor() {}
}
