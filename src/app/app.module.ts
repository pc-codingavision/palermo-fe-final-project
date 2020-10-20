import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { InMemoryAuthService } from './modules/core/auth/auth-in-memory.service'
import { AuthService } from './modules/core/auth/auth.service'
import { MaterialModule } from './modules/shared/material.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
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
