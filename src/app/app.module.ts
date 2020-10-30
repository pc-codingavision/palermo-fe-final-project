import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AdvertisementModule } from './modules/core/advertisement/advertisement.module'
import { MaterialModule } from './modules/shared/material.module'
import { DialogComponent } from './shared/components/dialog/dialog.component'
import { PageNotFoundComponent } from './shared/components/pagenotfound/pagenotfound.component'

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    AdvertisementModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
