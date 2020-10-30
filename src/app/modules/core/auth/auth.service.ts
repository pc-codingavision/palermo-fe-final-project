import { Injectable } from '@angular/core'
import * as decode from 'jwt-decode'
import { BehaviorSubject, Observable, pipe, throwError } from 'rxjs'
import { catchError, filter, map, mergeMap, tap } from 'rxjs/operators'

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
    // Check if the token has expired
    if (this.hasExpiredToken()) {
      // Log the user out and clear the token from the cache
      this.logout(true)
    } else {
      // If the token is still valid, decode the token and emit the auth status
      this.authStatus$.next(this.getAuthStatusFromToken())
      // To load user on browser refresh, resume pipeline must activate on the next cycle
      // which allows for all services to be constructed properly
      setTimeout(() => this.resumeCurrentUser$.subscribe(), 0)
    }
  }

  private getAndUpdateUserIfAuthenticated = pipe(
    filter((status: IAuthStatus) => status.isAuthenticated),
    mergeMap(() => this.getCurrentUser()),
    map((user) => this.currentUser$.next(user)),
    catchError(transformError)
  )

  protected readonly resumeCurrentUser$ = this.authStatus$.pipe(
    this.getAndUpdateUserIfAuthenticated
  )

  protected abstract authProvider(
    email: string,
    password: string
  ): Observable<IServerAuthResponse>

  protected abstract transformJwtToken(token: unknown): IAuthStatus

  protected abstract getCurrentUser(): Observable<User>

  protected setToken(jwt: string): void {
    this.setItem('jwt', jwt)
  }

  protected clearToken(): void {
    this.removeItem('jwt')
  }

  protected hasExpiredToken(): boolean {
    const jwtToken = this.getToken()

    if (jwtToken) {
      const payload = decode(jwtToken) as any
      return Date.now() >= payload.exp * 1000
    }
    return true
  }

  protected getAuthStatusFromToken(): IAuthStatus {
    return this.transformJwtToken(decode(this.getToken()))
  }

  getToken(): string {
    return this.getItem('jwt') ?? ''
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
      this.getAndUpdateUserIfAuthenticated
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
