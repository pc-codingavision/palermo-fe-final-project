import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AdvertisementModule } from './modules/core/advertisement/advertisement.module'
import { InMemoryAuthService } from './modules/core/auth/auth-in-memory.service'
import { AuthService } from './modules/core/auth/auth.service'
import { SharedModule } from './modules/shared/shared.module'
import { LogoutComponent } from './shared/components/logout/logout.component'
import { PageNotFoundComponent } from './shared/components/pagenotfound/pagenotfound.component'

const appComponents = [AppComponent, PageNotFoundComponent, LogoutComponent]

@NgModule({
  declarations: [...appComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdvertisementModule,
    SharedModule,
  ],
  providers: [
    {
      provide: AuthService,
      useClass: InMemoryAuthService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
