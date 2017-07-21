import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdDialogModule, MdSidenavModule, MdToolbarModule} from '@angular/material';

import 'hammerjs';

import {NgFlyModule} from '../../node_modules/ngfly/src';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdSidenavModule,
    MdDialogModule,

    NgFlyModule.forRoot(),
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
