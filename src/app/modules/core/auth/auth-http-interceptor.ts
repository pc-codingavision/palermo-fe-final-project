import { Injectable } from '@angular/core'
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { catchError } from 'rxjs/operators'

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwtToken = this.authService.getToken()
    const authRequest = req.clone({
      setHeaders: { authorization: `Bearer: ${jwtToken}` },
    })
    return next.handle(authRequest).pipe(
      catchError((err, caught) => {
        if (err.status === 401) {
          this.router.navigate(['/login'], {
            queryParams: { redirectUrl: this.router.routerState.snapshot.url },
          })
        }
        return throwError(err)
      })
    )
  }
}
