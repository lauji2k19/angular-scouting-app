import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';
import { LoadingState } from '@app/state/loading.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
// import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { AppComponent } from './app.component';

import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SimpleEventsComponent } from './pages/home/events/simple-events/simple-events.component';
import { MDBBootstrapModule, NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './pages/home/events/events.component';
import { DetailedEventsComponent } from './pages/home/events/detailed-events/detailed-events.component';
import { environment } from '@env/environment';
import { SimpleEventsState } from './state/simple-events.state';

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.googleOAuthClientId)
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimpleEventsComponent,
    EventsComponent,
    DetailedEventsComponent
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
    ButtonsModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    NgxsModule.forRoot(
    [
      LoadingState,
      SimpleEventsState
    ],
    {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),
    NgxUiLoaderModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
