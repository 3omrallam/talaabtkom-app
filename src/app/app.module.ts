import { ViewModule } from './view/view.module';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTooltipModule } from '@angular/material/tooltip';

import { JwtInterceptor } from './core/helpers/jwt.interceptor';
import { ErrorInterceptor } from './core/helpers/error.interceptor';

import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
