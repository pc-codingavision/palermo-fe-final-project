import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AdvertisementModule } from '@modules/core/advertisement/advertisement.module'
import { AuthHttpInterceptor } from '@modules/core/auth/auth-http-interceptor'
import { AuthService } from '@modules/core/auth/auth.service'
import { SharedModule } from '@modules/shared/shared.module'
import { LoginComponent } from '@shared/components/login/login.component'
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { InMemoryAuthService } from './modules/core/auth/auth-in-memory.service'
import { LogoutComponent } from './shared/components/logout/logout.component'

const appComponents = [
  AppComponent,
  PageNotFoundComponent,
  LoginComponent,
  LogoutComponent,
]

const appModules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  AdvertisementModule,
  SharedModule,
]

@NgModule({
  declarations: [...appComponents],
  imports: [...appModules],
  providers: [
    {
      provide: AuthService,
      useClass: InMemoryAuthService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
