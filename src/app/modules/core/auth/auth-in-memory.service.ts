import { Injectable } from '@angular/core'
import {
  AuthService,
  IAuthStatus,
  IServerAuthResponse,
} from '@modules/core/auth/auth.service'
import { Landlord } from '@shared/models/landlord'
import { Manager } from '@shared/models/manager'
import {
  LANDLORDS_MOCK_DATA,
  MANAGERS_MOCK_DATA,
  TENANTS_MOCK_DATA,
} from '@shared/models/mock-data/data'
import { Tenant } from '@shared/models/tenant'
import { IUser, User } from '@shared/models/users'
import { SnackBarService } from '@shared/services/snack-bar.service'
import { sign } from 'fake-jwt-sign'
import * as moment from 'moment'
import { Observable, concat, from, of, throwError } from 'rxjs'
import { catchError, find } from 'rxjs/operators'

@Injectable()
export class InMemoryAuthService extends AuthService {
  landlords$ = from(LANDLORDS_MOCK_DATA.map((landlord) => Landlord.Build(landlord)))
  managers$ = from(MANAGERS_MOCK_DATA.map((manager) => Manager.Build(manager)))
  tenants$ = from(TENANTS_MOCK_DATA.map((tenant) => Tenant.Build(tenant)))
  currentUser: IUser

  mockUsers$ = concat(this.landlords$, this.managers$, this.tenants$)

  constructor(private snackBarService: SnackBarService) {
    super()
    console.warn(
      "You're using the InMemoryAuthService. Do not use this service in production."
    )
  }

  protected authProvider(
    email: string,
    password: string
  ): Observable<IServerAuthResponse> {
    email = email.toLowerCase()
    let authUser: IAuthStatus

    this.mockUsers$
      .pipe(
        find((user) => user.mail === email && user.password === password),
        catchError((err) => of(err))
      )
      .subscribe((user: IUser) => {
        if (user) {
          authUser = {
            isAuthenticated: true,
            userRole: user.role,
            userId: user.id,
          }
          this.currentUser = user
        }
      })

    if (!authUser) {
      this.snackBarService.openSnackBar(
        'Login failed email or password incorrect',
        'Close',
        5000
      )
      return throwError('Login failed email or password incorrect')
    }

    const authResponse = {
      accessToken: sign(authUser, 'secret', {
        expiresIn: moment(moment.now()).add(1, 'hour').valueOf(),
        algorithm: 'none',
      }),
    } as IServerAuthResponse
    return of(authResponse)
  }

  protected getCurrentUser(): Observable<IUser> {
    return of(this.currentUser)
  }

  protected removeCurrentUser(): void {
    this.currentUser = User.Build({} as IUser)
    this.currentUser$.next(this.currentUser)
  }
  protected transformJwtToken(token: IAuthStatus): IAuthStatus {
    return token
  }
}
