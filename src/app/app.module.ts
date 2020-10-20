import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MaterialModule } from './modules/shared/material.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
