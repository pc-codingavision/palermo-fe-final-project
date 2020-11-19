import { IGenericUserService } from '@modules/shared/interfaces/i-generic-user-service'
import { Observable, of } from 'rxjs'

export abstract class GenericUserService<T> implements IGenericUserService<T> {
  abstract getMockedData(): T[]
  abstract builtMockData(user: T): T

  private getArrayIndexById(id: number): number | null {
    // @ts-ignore
    const index = this.getMockedData().findIndex((user) => user.id === id)
    return index === -1 ? null : index
  }

  getAll(): Observable<T[]> {
    return of(this.getMockedData().map((user) => this.builtMockData(user)))
  }

  getById(id: number): Observable<T> {
    if (id !== null) {
      // @ts-ignore
      const userById = this.getMockedData().find((user: T) => user.id === id)
      if (userById !== undefined) {
        return of(this.builtMockData(userById))
      }
    }
    return of(null)
  }

  getByStatus(status: boolean): Observable<T[]> {
    // @ts-ignore
    return of(this.getMockedData().filter((user) => user.status === status))
  }

  getByFullName(fullName: string): Observable<T[]> {
    const buildUsers = this.getMockedData().map((user) => this.builtMockData(user))
    // @ts-ignore
    return of(buildUsers.filter((user) => fullName === user.fullName))
  }

  add(user: T): void {
    if (user !== null) {
      this.getMockedData().push(user)
    }
  }

  update(user: T): Observable<T | null> {
    if (user !== null) {
      // @ts-ignore
      const index = this.getArrayIndexById(user.id)
      if (typeof index === 'number') {
        return of((this.getMockedData()[index] = user))
      }
    }
    return of(null)
  }

  delete(id: number): void {
    if (this.getArrayIndexById(id) !== null) {
      this.getMockedData().splice(this.getArrayIndexById(id), 1)
    }
  }
}
