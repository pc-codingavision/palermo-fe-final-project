import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, throwError } from 'rxjs'
import { catchError, filter, flatMap, map, tap } from 'rxjs/operators'
import { transformError } from '../../../shared/common'
import { Role } from '../../../shared/models/role.enum'
import { IUser, User } from './models/user'

export interface IAuthStatus {
  isAuthenticated: boolean
  userRole: Role
  userId: string
}

export interface IServerAuthResponse {
  accessToken: string
}

export const defaultAuthStatus: IAuthStatus = {
  isAuthenticated: false,
  userRole: Role.None,
  userId: '',
}

export interface IAuthService {
  readonly authStatus$: BehaviorSubject<IAuthStatus>
  readonly currentUser$: BehaviorSubject<IUser>

  login(email: string, password: string): Observable<void>

  logout(clearToken?: boolean): void

  getToken(): string
}

@Injectable()
export abstract class AuthService implements IAuthService {
  readonly authStatus$ = new BehaviorSubject<IAuthStatus>(defaultAuthStatus)
  readonly currentUser$ = new BehaviorSubject<IUser>(new User())

  protected constructor() {}

  protected abstract authProvider(
    email: string,
    password: string
  ): Observable<IServerAuthResponse>

  protected abstract transformJwtToken(token: unknown): IAuthStatus

  protected abstract getCurrentUser(): Observable<User>

  getToken(): string {
    throw new Error('Method not implemented.')
  }

  login(email: string, password: string): Observable<void> {
    const loginResponse$ = this.authProvider(email, password).pipe(
      map((value) => {
        const token = decode(value.accessToken)
        return this.transformJwtToken(token)
      }),
      tap((status) => this.authStatus$.next(status)),
      filter((status: IAuthStatus) => status.isAuthenticated),
      flatMap(() => this.getCurrentUser()),
      map((user) => this.currentUser$.next(user)),
      catchError(transformError)
    )
    loginResponse$.subscribe({
      error: (err) => {
        this.logout()
        return throwError(err)
      },
    })
    return loginResponse$
  }

  logout(clearToken?: boolean): void {
    // Note the use of setTimeout, which allows us to avoid timing
    // issues when core elements of the application are all changing statuses at once.
    setTimeout(() => this.authStatus$.next(defaultAuthStatus), 0)
  }
}
