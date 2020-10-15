import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LandlordModule } from './modules/core/landlord/landlord.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LandlordModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
