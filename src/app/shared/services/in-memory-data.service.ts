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
import {
  InMemoryDbService,
  RequestInfo,
  ResponseOptions,
} from 'angular-in-memory-web-api'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const advertisements = MOCKADVERTISEMENTS_MOCK_DATA
    const tenants = TENANTS_MOCK_DATA
    const landlords = LANDLORDS_MOCK_DATA
    const reservations = RESERVATIONS_MOCK_DATA
    return { advertisements, tenants, landlords, reservations }
  }

  genId<T extends IAdvertisement | IUser | IReservation>(dataArray: T[]): number {
    return dataArray.length > 0 ? Math.max(...dataArray.map((t) => t.id)) + 1 : 1
  }

  get(reqInfo: RequestInfo): Observable<any> {
    const collectionName = reqInfo.collectionName
    if (collectionName === 'tenants' && reqInfo.query.has('name')) {
      return this.getTenantsByName(reqInfo)
    } else if (collectionName === 'tenants' && reqInfo.query.has('surname')) {
      return this.getTenantsBySurname(reqInfo)
    }
    return undefined
  }

  private getTenantsByName(reqInfo: RequestInfo): Observable<any> {
    return reqInfo.utils.createResponse$(() => {
      const collection = reqInfo.collection.slice()
      const name = reqInfo.query.get('name')[0]

      const data =
        name && name.trim() !== ''
          ? collection.filter(
              (item) => item.name.firstName.toLowerCase() === name.toLowerCase()
            )
          : []

      const options: ResponseOptions = data
        ? {
            body: data,
            status: 200,
          }
        : {
            body: { error: `'Tenants' with name='${name}' not found` },
            status: 404,
          }
      return this.finishOptions(options, reqInfo)
    })
  }

  private getTenantsBySurname(reqInfo: RequestInfo): Observable<any> {
    return reqInfo.utils.createResponse$(() => {
      const collection = reqInfo.collection.slice()
      const surname = reqInfo.query.get('surname')[0]

      const data =
        surname && surname.trim() !== ''
          ? collection.filter(
              (item) => item.name.surname.toLowerCase() === surname.toLowerCase()
            )
          : []

      const options: ResponseOptions = data
        ? {
            body: data,
            status: 200,
          }
        : {
            body: { error: `'Tenants' with surname='${surname}' not found` },
            status: 404,
          }
      return this.finishOptions(options, reqInfo)
    })
  }

  private finishOptions(
    options: ResponseOptions,
    { headers, url }: RequestInfo
  ): ResponseOptions {
    options.headers = headers
    options.url = url
    return options
  }
}
