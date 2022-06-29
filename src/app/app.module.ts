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
import { AuthGuard } from './services/auth-guard.service';
import { LoginService } from './services/api/login.service';
import { ApiRequestService } from './services/api/api-request.service';
import { EmployeesComponent } from './pages/employees/employees.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ClarityModule } from '@clr/angular';
import { AppConfig } from './app-config';
import { OrderService } from './services/api/order.service';
import { ProductService } from './services/api/product.service';
import { CustomerService } from './services/api/customer.service';
import { EmployeeService } from './services/api/employee.service';
import { OrderStatsComponent } from './pages/order-stats/order-stats.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductStatsComponent } from './pages/product-stats/product-stats.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LegendComponent,
    BadgeComponent,
    TrackScrollDirective,
    PageNotFoundComponent,
    CustomersComponent,
    DashboardComponent,
    EmployeesComponent,
    LoginComponent,
    LogoutComponent,
    OrderDetailsComponent,
    OrderStatsComponent,
    OrdersComponent,
    ProductStatsComponent,
    ProductsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxChartsModule,
    ClarityModule
  ],
  providers: [
    UserInfoService,
    AuthGuard,
    LoginService,
    ApiRequestService,
    LoginService,
    OrderService,
    ProductService,
    CustomerService,
    EmployeeService,
    AppConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
