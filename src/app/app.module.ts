import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//custom validation
import { Validation } from './validation/validation';

//prime ng
import { ProgressSpinnerModule } from 'primeng/progressspinner';

//custom components
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './error-page/not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { LorryArrivalDetailsComponent } from './receive/lorry-arrival-details/lorry-arrival-details.component';

//custom module
import { BookingModule } from './booking/booking.module';
import { dashboardModule } from './dashboard/dashboard.module';
import { FixedFrameModule } from './fixed-frame/fixedframe.module';
import { TableModule } from 'primeng/table';
import { MenifestlistComponent } from './Loading/Menifest/menifestlist/menifestlist.component';
import { NewmenifestComponent } from './Loading/Menifest/newmenifest/newmenifest.component';
<<<<<<< HEAD
import { MenifestCartComponent } from './Loading/Menifest/menifest-cart/menifest-cart.component';
=======
import { NewvehicleComponent } from './Loading/Vehicledetails/newvehicle/newvehicle.component';
import { VehicleregisterComponent } from './Loading/Vehicledetails/vehicleregister/vehicleregister.component';

>>>>>>> origin/master
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    NotFoundComponent,
    LorryArrivalDetailsComponent,
    MenifestlistComponent,
    NewmenifestComponent,
<<<<<<< HEAD
    MenifestCartComponent
=======
    NewvehicleComponent,
    VehicleregisterComponent,
>>>>>>> origin/master
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BookingModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    dashboardModule,
    FixedFrameModule,
    TableModule,
  ],

  providers: [Validation],

  bootstrap: [AppComponent],
})
export class AppModule {}
