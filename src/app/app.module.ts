import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SimpleEventsComponent } from './simple-events/simple-events.component';
import { MDBBootstrapModule, NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './events/events.component';
import { DetailedEventsComponent } from './detailed-events/detailed-events.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimpleEventsComponent,
    EventsComponent,
    DetailedEventsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    MenubarModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    NavbarModule,
    WavesModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
