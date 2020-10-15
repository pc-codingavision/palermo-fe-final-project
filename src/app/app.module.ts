import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { TenantModule } from './modules/core/tenant/tenant.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TenantModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
