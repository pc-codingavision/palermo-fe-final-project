import { Injectable } from '@angular/core'
import { sign } from 'fake-jwt-sign'
import { Observable, of, throwError } from 'rxjs'
import { Role } from '../../../shared/models/role.enum'
import { AuthService, IAuthStatus, IServerAuthResponse } from './auth.service'
import { PhoneType, User } from './models/user'

@Injectable()
export class InMemoryAuthService extends AuthService {
  private defaultUser = User.Build({
    _id: '1da1986538vdfg2245zz',
    email: 'pierocascio@codingavision.com',
    name: { first: 'Piero', last: 'Cascio' },
    picture:
      'https://en.gravatar.com/userimage/24135551/b0e4fc2c138254516709e353642e24f0.jpg?size=200',
    role: Role.Manager,
    dateOfBirth: new Date(1975, 7, 31),
    userStatus: true,
    address: {
      line1: 'Via dei Ciclamini',
      city: 'Palermo',
      state: 'Italia',
      zip: '90121',
    },
    level: 2,
    phones: [
      {
        id: 0,
        type: PhoneType.Home,
        digits: '091987654321',
      },
      {
        id: 1,
        type: PhoneType.Mobile,
        digits: '339123456789',
      },
    ],
  })

  constructor() {
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
    if (!email.endsWith('@test.com')) {
      return throwError('Failed to login! Email needs to end with @test.com.')
    }
    const authStatus = {
      isAuthenticated: true,
      userId: this.defaultUser._id,
      userRole: email.includes('tenant')
        ? Role.Tenant
        : email.includes('landlord')
        ? Role.Landlord
        : email.includes('manager')
        ? Role.Manager
        : Role.None,
    } as IAuthStatus
    this.defaultUser.role = authStatus.userRole
    const authResponse = {
      accessToken: sign(authStatus, 'secret', {
        expiresIn: '1h',
        algorithm: 'none',
      }),
    } as IServerAuthResponse

    return of(authResponse)
  }

  protected getCurrentUser(): Observable<User> {
    return of(this.defaultUser)
  }

  protected transformJwtToken(token: IAuthStatus): IAuthStatus {
    return token
  }
}
