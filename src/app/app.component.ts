import { Component } from '@angular/core'
import { AuthService } from '@modules/core/auth/auth.service'

@Component({
  selector: 'cav-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Course - Final Project'
  sideNavOpened = false

  constructor(public authService: AuthService) {}

  onToggleSideNav(): void {
    this.sideNavOpened = !this.sideNavOpened
  }
}
