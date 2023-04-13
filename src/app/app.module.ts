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
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './error-page/not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { Validation } from './validation/validation';
import { LorryArrivalDetailsComponent } from './receive/lorry-arrival-details/lorry-arrival-details.component';
import { VehicleregisterComponent } from './Loading/Vehicledetails/vehicleregister/vehicleregister.component';
import { MenifestlistComponent } from './Loading/Menifest/menifestlist/menifestlist.component';
import { NewmenifestComponent } from './Loading/Menifest/newmenifest/newmenifest.component';
import { NewvehicleComponent } from './Loading/Vehicledetails/newvehicle/newvehicle.component';

//custom module
import { BookingModule } from './booking/booking.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FixedFrameModule } from './fixed-frame/fixedframe.module';
import { MenifestCartComponent } from './Loading/Menifest/menifest-cart/menifest-cart.component';
import { MenifestDetailsComponent } from './Loading/Menifest/menifest-details/menifest-details.component';
import { CompanyComponent } from './settings/company/company.component';
import { ConsigmentArrivelListComponent } from './delivery/consigment-arrivel-list/consigment-arrivel-list.component';
import { GatePassRegisterComponent } from './delivery/gate-pass-register/gate-pass-register.component';
import { Filter3Pipe } from './pipe/filter3.pipe';

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
    MenifestDetailsComponent,
    CompanyComponent,
    ConsigmentArrivelListComponent,
    GatePassRegisterComponent,
    Filter3Pipe,
  ],
  imports: [
    BrowserModule,
    BookingModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    DashboardModule,
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
