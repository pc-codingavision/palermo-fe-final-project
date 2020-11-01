import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AdvertisementModule } from './modules/core/advertisement/advertisement.module'
import { AuthHttpInterceptor } from './modules/core/auth/auth-http-interceptor'
import { InMemoryAuthService } from './modules/core/auth/auth-in-memory.service'
import { AuthService } from './modules/core/auth/auth.service'
import { MaterialModule } from './modules/shared/material.module'
import { LogoutComponent } from './shared/components/logout/logout.component'
import { PageNotFoundComponent } from './shared/components/pagenotfound/pagenotfound.component'

const appComponents = [AppComponent, PageNotFoundComponent, LogoutComponent]

@NgModule({
  declarations: [...appComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    AdvertisementModule,
  ],
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
