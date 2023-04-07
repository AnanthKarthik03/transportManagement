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
import { Validation } from './validation/validation';
import { SuperAdminDashboardComponent } from './dashboard/super-admin-dashboard/super-admin-dashboard.component';
import { VendorDashboardComponent } from './dashboard/vendor-dashboard/vendor-dashboard.component';
import { LorryArrivalDetailsComponent } from './receive/lorry-arrival-details/lorry-arrival-details.component';
import { BookingModule } from './booking/booking.module';
import { FixedFrameModule } from './fixed-frame/fixedframe.module';
import { dashboardModule } from './dashboard/dashboard.module';
import { NewBiltyCnComponent } from './booking/new-bilty-cn/new-bilty-cn.component';
import { ConsignorComponent } from './booking/consignor/consignor.component';
import { ConsignmentBookingComponent } from './booking/consignment-booking/consignment-booking.component';
import { AdditionalServiceCBSComponent } from './booking/additional-service-c-b-s/additional-service-c-b-s.component';
import { ConsigneeComponent } from './booking/consignee/consignee.component';
import { VehicleregisterComponent } from './Loading/Vehicledetails/vehicleregister/vehicleregister.component';
import { NewvehicleComponent } from './Loading/Vehicledetails/newvehicle/newvehicle.component';
import { MenifestlistComponent } from './Loading/Menifest/menifestlist/menifestlist.component';
import { NewmenifestComponent } from './Loading/Menifest/newmenifest/newmenifest.component';
import { MenifestCartComponent } from './Loading/Menifest/menifest-cart/menifest-cart.component';
import { MenifestDetailsComponent } from './Loading/Menifest/menifest-details/menifest-details.component';
MenifestCartComponent
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    NotFoundComponent,
    LorryArrivalDetailsComponent,
    VehicleregisterComponent,
    NewvehicleComponent,
    MenifestlistComponent,
    NewmenifestComponent,
    MenifestCartComponent,
    MenifestDetailsComponent
  ],
  imports: [
    BrowserModule,
    BookingModule,
    dashboardModule,
    FixedFrameModule,
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
