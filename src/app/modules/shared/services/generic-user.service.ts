import { IGenericUserDao } from '@modules/shared/interfaces/IGenericUserDao'
import { TENANTS_MOCK_DATA } from '@shared/models/mock-data/data'
import { Observable, of } from 'rxjs'

export abstract class GenericUserService<T> implements IGenericUserDao<T> {
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
  }

  getByStatus(status: boolean): Observable<T[]> {
    // @ts-ignore
    const usersByStatus = this.getMockedData().filter((user: T) => user.status === status)
    if (usersByStatus.length) {
      return of(usersByStatus.map((user) => this.builtMockData(user)))
    }
  }

  getByFullName(fullName: string): Observable<T[]> {
    const buildUsers = this.getMockedData().map((user) => this.builtMockData(user))
    // @ts-ignore
    const users = buildUsers.filter((user: T) => fullName === user.fullName)
    if (users.length) {
      return of(users.map((user) => this.builtMockData(user)))
    }
  }

  // da sistemare
  add(user: T): void {
    if (user !== null) {
      this.getMockedData().push(user)
      console.log(TENANTS_MOCK_DATA)
    }
  }
  // da sistemare
  update(user: T): Observable<T | null> {
    if (user !== null) {
      // @ts-ignore
      const index = this.getArrayIndexById(user.id)
      if (typeof index === 'number') {
        return of((this.getMockedData()[index] = user))
      }
    }
  }
  // da sistemare
  delete(id: number): void {
    if (this.getArrayIndexById(id) !== null) {
      this.getMockedData().splice(this.getArrayIndexById(id), 1)
    }
  }
}
