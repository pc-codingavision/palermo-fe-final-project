import { Property } from './../../../../shared/models/property'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import { PROPERTY } from './../../../../shared/models/mock-data/mock-property'

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  constructor() {}

  findAll(): Observable<Property[]> {
    return of(PROPERTY)
  }

  findById(id: number): Observable<Property> {
    return of(PROPERTY.find((property) => property.id === id))
  }
}
