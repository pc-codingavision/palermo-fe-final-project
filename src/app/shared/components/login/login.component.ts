import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from '@modules/core/auth/auth.service'
import { Role } from '@shared/enum/enums'
import { combineLatest } from 'rxjs'
import { catchError, filter, tap } from 'rxjs/operators'
import { SubSink } from 'subsink'

@Component({
  selector: 'cav-login',
  templateUrl: './login.component.html',
  styles: [
    `
      .error {
        color: red;
      }
    `,
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
  ],
})
export class LoginComponent implements OnInit, OnDestroy {
  private subs = new SubSink()
  loginForm: FormGroup
  loginError = ''
  redirectUrl: string

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.subs.sink = route.paramMap.subscribe(
      (params) => (this.redirectUrl = params.get('redirectUrl') ?? '')
    )
  }

  ngOnInit(): void {
    this.authService.logout()
    this.buildLoginForm()
  }

  private buildLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(50)],
      ],
    })
  }

  login(submittedForm: FormGroup): void {
    this.authService
      .login(submittedForm.value.email, submittedForm.value.password)
      .pipe(catchError((err) => (this.loginError = err)))
    this.subs.sink = combineLatest([
      this.authService.authStatus$,
      this.authService.currentUser$,
    ])
      .pipe(
        filter(([authStatus, user]) => authStatus.isAuthenticated && user?.id !== null),
        tap(([authStatus, user]) => {
          switch (authStatus.userRole) {
            case Role.Manager:
              this.router.navigate([this.redirectUrl || '/manager'])
              break
            case Role.Landlord:
              this.router.navigate([this.redirectUrl || '/landlord'])
              break
            case Role.Tenant:
              this.router.navigate([this.redirectUrl || '/tenant'])
              break
          }
        })
      )
      .subscribe()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
