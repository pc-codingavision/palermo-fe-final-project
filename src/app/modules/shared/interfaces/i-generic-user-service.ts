import { Observable } from 'rxjs'

export interface IGenericUserService<T> {
  getMockedData(): T[]

  getAll(): Observable<T[]>

  getById(id: number): Observable<T>

  add(user: T): void

  update(user: T): Observable<T | null>

  delete(id: number): void
}
