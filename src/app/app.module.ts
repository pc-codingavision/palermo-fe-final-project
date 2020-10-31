import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AdvertisementModule } from './modules/core/advertisement/advertisement.module'
import { InMemoryAuthService } from './modules/core/auth/auth-in-memory.service'
import { AuthService } from './modules/core/auth/auth.service'
import { MaterialModule } from './modules/shared/material.module'
import { PageNotFoundComponent } from './shared/components/pagenotfound/pagenotfound.component'

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
