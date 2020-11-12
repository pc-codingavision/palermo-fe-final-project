import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class DeactivateGuard implements CanDeactivate<any> {
  constructor() {}

  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Promise<boolean | UrlTree> | boolean {
    return component.canExit() ? component.canExit : true
  }
}
