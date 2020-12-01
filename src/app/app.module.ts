import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AdvertisementModule } from '@modules/core/advertisement/advertisement.module'
import { AuthHttpInterceptor } from '@modules/core/auth/auth-http-interceptor'
import { InMemoryAuthService } from '@modules/core/auth/auth-in-memory.service'
import { AuthService } from '@modules/core/auth/auth.service'
import { SharedModule } from '@modules/shared/shared.module'
import { LoginComponent } from '@shared/components/login/login.component'
import { LogoutComponent } from '@shared/components/logout/logout.component'
import { NavigationMenuComponent } from '@shared/components/navigation-menu/navigation-menu.component'
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component'
import { SidenavComponent } from '@shared/components/sidenav/sidenav.component'
import { ToolbarComponent } from '@shared/components/toolbar/toolbar.component'
import { InMemoryDataService } from '@shared/services/in-memory-data.service'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

const appComponents = [
  AppComponent,
  PageNotFoundComponent,
  LoginComponent,
  LogoutComponent,
  ToolbarComponent,
  SidenavComponent,
  NavigationMenuComponent,
]

const appModules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  AdvertisementModule,
  SharedModule,
  HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    delay: 1000,
    dataEncapsulation: false,
    put204: false,
  }),
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
