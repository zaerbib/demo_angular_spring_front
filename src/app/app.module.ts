import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { LegendComponent } from './components/legend/legend.component';
import { BadgeComponent } from './components/badge/badge.component';
import { PageNotFoundComponent } from './pages/404/page-not-found.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TrackScrollDirective } from './directives/track_scroll/track-scroll.directive';
import { UserInfoService } from './services/user-info.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginService } from './services/api/login.service';
import { ApiRequestService } from './services/api/api-request.service';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LegendComponent,
    BadgeComponent,
    TrackScrollDirective,
    PageNotFoundComponent,
    CustomersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UserInfoService,
    AuthGuardService,
    LoginService,
    ApiRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
