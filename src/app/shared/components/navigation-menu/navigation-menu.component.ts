import { Component, OnInit } from '@angular/core'
import { AuthService, IAuthStatus } from '@modules/core/auth/auth.service'
import { Role } from '@shared/enum/enums'
import { Observable } from 'rxjs'

@Component({
  selector: 'cav-navigation-menu',
  template: `
    <mat-nav-list>
      <div
        class="manager-menu"
        *ngIf="(authService.authStatus$ | async).userRole === Role.Manager"
      >
        <h3 matSubheader>Manager</h3>
        <a mat-list-item routerLinkActive="active-link" routerLink="/manager/landlord"
          >Landlord</a
        >
        <a mat-list-item routerLinkActive="active-link" routerLink="/manager/tenant"
          >Tenant</a
        >
        <a mat-list-item routerLinkActive="active-link" routerLink="/manager/reservation"
          >Reservation</a
        >
      </div>
      <div
        class="landlord-menu"
        *ngIf="(authService.authStatus$ | async).userRole === Role.Landlord"
      >
        <h3 matSubheader>Landlord</h3>
        <a mat-list-item routerLinkActive="active-link" routerLink="/landlord/profile"
          >Profile</a
        >
        <a
          mat-list-item
          routerLinkActive="active-link"
          routerLink="/landlord/advertisements"
          >Advertisement</a
        >
        <a mat-list-item routerLinkActive="active-link" routerLink="/landlord/real-estate"
          >Real Estate</a
        >
      </div>
      <div
        class="tenant-menu"
        *ngIf="(authService.authStatus$ | async).userRole === Role.Tenant"
      >
        <h3 matSubheader>Tenant</h3>
        <a mat-list-item routerLinkActive="active-link" routerLink="/tenant/profile"
          >Profile</a
        >
        <a mat-list-item routerLinkActive="active-link" routerLink="/tenant/reservation"
          >Reservations</a
        >
      </div>
    </mat-nav-list>
  `,
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  Role = Role
  authStatus$: Observable<IAuthStatus>

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authStatus$ = this.authService.authStatus$
  }
}
