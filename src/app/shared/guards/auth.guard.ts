import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router'
import { AuthService } from '@modules/core/auth/auth.service'
import { Role } from '@shared/enum/enums'
import { SnackBarService } from '@shared/services/snack-bar.service'
import { Observable } from 'rxjs'
import { map, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBarService: SnackBarService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkLogin(route)
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkLogin(childRoute)
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.checkLogin()
  }

  protected checkLogin(route?: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authService.authStatus$.pipe(
      map((authStatus) => {
        const roleMatch = this.checkRoleMatch(authStatus.userRole, route)
        const allowLogin = authStatus.isAuthenticated && roleMatch
        if (!allowLogin) {
          this.showAlert(authStatus.isAuthenticated, roleMatch)
          this.router.navigate(['login'], {
            queryParams: {
              redirectUrl: this.getResolvedUrl(route),
            },
          })
        }
        return allowLogin
      }),
      take(1)
    )
  }

  // tslint:disable-next-line:typedef
  private checkRoleMatch(role: Role, route: ActivatedRouteSnapshot): boolean {
    if (!route?.data?.expectedRole) {
      return true
    }
    return role === route.data.expectedRole
  }

  private showAlert(isAuth: boolean, roleMatch: boolean): void {
    if (!isAuth) {
      this.snackBarService.openSnackBar('You must login to continue')
    }
    if (!roleMatch) {
      this.snackBarService.openSnackBar(
        'You do not have the permissions to view this resource'
      )
    }
  }

  private getResolvedUrl(route: ActivatedRouteSnapshot): string {
    if (!route) {
      return ''
    }
    return route.pathFromRoot
      .map((r) => r.url.map((segment) => segment.toString()).join('/'))
      .join('/')
      .replace('//', '/')
  }
}
