import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '@modules/core/auth/auth.service'

@Component({
  selector: 'cav-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.logout(true)
    this.router.navigate(['/'])
  }
}
