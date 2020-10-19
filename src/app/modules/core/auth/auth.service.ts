import { Injectable } from '@angular/core'
import * as decode from 'jwt-decode'
import { BehaviorSubject, Observable, throwError } from 'rxjs'
import { catchError, filter, flatMap, map, tap } from 'rxjs/operators'

import { transformError } from '../../../shared/common'
import { Role } from '../../../shared/models/role.enum'
import { CacheService } from './cache.service'
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
export abstract class AuthService extends CacheService implements IAuthService {
  readonly authStatus$ = new BehaviorSubject<IAuthStatus>(defaultAuthStatus)
  readonly currentUser$ = new BehaviorSubject<IUser>(new User())

  protected constructor() {
    super()
  }

  protected abstract authProvider(
    email: string,
    password: string
  ): Observable<IServerAuthResponse>

  protected abstract transformJwtToken(token: unknown): IAuthStatus

  protected abstract getCurrentUser(): Observable<User>

  protected setToken(jwt: string): void {
    this.setItem('jwt', jwt)
  }

  getToken(): string {
    return this.getItem('jwt') ?? ''
  }

  protected clearToken(): void {
    this.removeItem('jwt')
  }

  login(email: string, password: string): Observable<void> {
    // clear a previously stored jwt token
    this.clearToken()

    const loginResponse$ = this.authProvider(email, password).pipe(
      map((value) => {
        this.setToken(value.accessToken)
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
    if (clearToken) {
      this.clearToken()
    }
    // Note the use of setTimeout, which allows us to avoid timing
    // issues when core elements of the application are all changing statuses at once.
    setTimeout(() => this.authStatus$.next(defaultAuthStatus), 0)
  }
}
