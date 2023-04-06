import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Prime-ng modules
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

//ngx toastr

import { ToastrModule } from 'ngx-toastr';

//custom components
import { HeaderComponent } from './fixed-frame/header/header.component';
import { FooterComponent } from './fixed-frame/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { NotFoundComponent } from './error-page/not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ConsignmentBookingRegisterComponent } from './booking/consignment-booking-register/consignment-booking-register.component';
import { Validation } from './validation/validation';
import { SuperAdminDashboardComponent } from './dashboard/super-admin-dashboard/super-admin-dashboard.component';
import { VendorDashboardComponent } from './dashboard/vendor-dashboard/vendor-dashboard.component';
import { LorryArrivalDetailsComponent } from './receive/lorry-arrival-details/lorry-arrival-details.component';
import { NewBiltyCnComponent } from './booking/new-bilty-cn/new-bilty-cn.component';
import { ConsignorComponent } from './booking/consignor/consignor.component';
import { ConsignmentBookingComponent } from './booking/consignment-booking/consignment-booking.component';
import { AdditionalServiceCBSComponent } from './booking/additional-service-c-b-s/additional-service-c-b-s.component';
import { ConsigneeComponent } from './booking/consignee/consignee.component';
import { DateWiseBookingRegisterComponent } from './booking/date-wise-booking-register/date-wise-booking-register.component';
import { Filter1Pipe } from './pipe/filter1.pipe';
import { Filter2Pipe } from './pipe/filter2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    AdminDashboardComponent,
    ConsignmentBookingRegisterComponent,
    NotFoundComponent,
    SuperAdminDashboardComponent,
    VendorDashboardComponent,
    LorryArrivalDetailsComponent,
    NewBiltyCnComponent,
    ConsignorComponent,
    ConsignmentBookingComponent,
    AdditionalServiceCBSComponent,
    ConsigneeComponent,
    DateWiseBookingRegisterComponent,
    Filter1Pipe,
    Filter2Pipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
    ProgressSpinnerModule,
  ],

  providers: [Validation],

  bootstrap: [AppComponent],
})
export class AppModule {}
