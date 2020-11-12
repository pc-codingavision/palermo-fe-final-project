import { Injectable } from '@angular/core'
import { PROPERTIES_MOCK_DATA } from '@shared/models/mock-data/data'
import { Observable, of } from 'rxjs'

import { Property } from '@shared/models/property'

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor() {}

  findAll(): Observable<Property[]> {
    return of(PROPERTIES_MOCK_DATA)
  }

  findById(id: number): Observable<Property> {
    return of(PROPERTIES_MOCK_DATA.find((property) => property.id === id))
  }
}
