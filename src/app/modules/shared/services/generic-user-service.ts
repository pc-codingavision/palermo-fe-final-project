import { IGenericUserService } from '@modules/shared/interfaces/i-generic-user-service'
import { IUser } from '@shared/models/users'
import { Observable, of } from 'rxjs'

export abstract class GenericUserService<T extends IUser>
  implements IGenericUserService<T> {
  abstract getMockedData(): T[]
  protected abstract builtMockData(user: T): T

  private getArrayIndexById(id: number): number | null {
    const index = this.getMockedData().findIndex((user) => user.id === id)
    return index === -1 ? null : index
  }

  getAll(): Observable<T[]> {
    return of(this.getMockedData().map((user) => this.builtMockData(user)))
  }

  getById(id: number): Observable<T> {
    if (id !== null) {
      const userById = this.getMockedData().find((user: T) => user.id === id)
      if (userById !== undefined) {
        return of(this.builtMockData(userById))
      }
    }
    return of(null)
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
