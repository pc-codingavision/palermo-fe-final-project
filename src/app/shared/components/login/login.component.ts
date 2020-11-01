import { Component, OnDestroy, OnInit } from '@angular/core'
import { SubSink } from 'subsink'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../../modules/core/auth/auth.service'
import { ActivatedRoute, Router } from '@angular/router'
import { catchError, filter, tap } from 'rxjs/operators'
import { combineLatest } from 'rxjs'

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
        filter(([authStatus, user]) => authStatus.isAuthenticated && user?._id !== ''),
        tap(([authStatus, user]) => {
          this.router.navigate([this.redirectUrl || '/manager'])
        })
      )
      .subscribe()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
