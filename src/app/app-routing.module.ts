import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsignmentBookingRegisterComponent } from './booking/consignment-booking-register/consignment-booking-register.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuperAdminDashboardComponent } from './dashboard/super-admin-dashboard/super-admin-dashboard.component';
import { VendorDashboardComponent } from './dashboard/vendor-dashboard/vendor-dashboard.component';
import { NotFoundComponent } from './error-page/not-found/not-found.component';
import { RoutePermissionGuard } from './guard/route-permission.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LorryArrivalDetailsComponent } from './receive/lorry-arrival-details/lorry-arrival-details.component';
import { NewBiltyCnComponent } from './booking/new-bilty-cn/new-bilty-cn.component';
import { ConsignorComponent } from './booking/consignor/consignor.component';
import { ConsignmentBookingComponent } from './booking/consignment-booking/consignment-booking.component';
import { AdditionalServiceCBSComponent } from './booking/additional-service-c-b-s/additional-service-c-b-s.component';
import { ConsigneeComponent } from './booking/consignee/consignee.component';
import { ConsignmentBookingRegisterBuiltyReportComponent } from './booking/consignment-booking-register-builty-report/consignment-booking-register-builty-report.component';
import { DateWiseBookingRegisterComponent } from './booking/date-wise-booking-register/date-wise-booking-register.component';
import { MenifestlistComponent } from './Loading/Menifest/menifestlist/menifestlist.component';
import { NewmenifestComponent } from './Loading/Menifest/newmenifest/newmenifest.component';
import { NewvehicleComponent } from './Loading/Vehicledetails/newvehicle/newvehicle.component';
import { VehicleregisterComponent } from './Loading/Vehicledetails/vehicleregister/vehicleregister.component';
import { MenifestCartComponent } from './Loading/Menifest/menifest-cart/menifest-cart.component';
import { MenifestDetailsComponent } from './Loading/Menifest/menifest-details/menifest-details.component';
import { CompanyComponent } from './settings/company/company.component';
import { CountryComponent } from './settings/country/country.component';
import { StateComponent } from './settings/state/state.component';

import { ConsigmentArrivelListComponent } from './delivery/consigment-arrivel-list/consigment-arrivel-list.component';
import { GatePassRegisterComponent } from './delivery/gate-pass-register/gate-pass-register.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'super-admin', component: SuperAdminDashboardComponent },
      { path: 'admin', component: AdminDashboardComponent },
      { path: 'vendor', component: VendorDashboardComponent },
      { path: 'profile', component: ProfileComponent },
      {
        path: 'consignment-booking-register',
        component: ConsignmentBookingRegisterComponent,
      },
      { path: 'new-bilty-cn', component: NewBiltyCnComponent },
      { path: 'consignor', component: ConsignorComponent },
      { path: 'consignment-booking', component: ConsignmentBookingComponent },
      {
        path: 'additional-service-c-b-s',
        component: AdditionalServiceCBSComponent,
      },
      {
        path: 'consignment-booking-register-report',
        component: ConsignmentBookingRegisterBuiltyReportComponent,
      },
      {
        path: 'date-wise-booking-register',
        component: DateWiseBookingRegisterComponent,
      },
      {
        path: 'consigment-arrivel-list',
        component: ConsigmentArrivelListComponent,
      },
      {
        path: 'gate-pass-register',
        component: GatePassRegisterComponent,
      },
      { path: 'consignee', component: ConsigneeComponent },
      { path: 'table', component: LorryArrivalDetailsComponent },
      { path: 'vehicleregister', component: VehicleregisterComponent },
      { path: 'newvehicle', component: NewvehicleComponent },
      { path: 'menifestlist', component: MenifestlistComponent },
      { path: 'newmenifest', component: NewmenifestComponent },
      { path: 'menifest-cart', component: MenifestCartComponent },
      { path: 'menifest-details', component: MenifestDetailsComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'country', component: CountryComponent },
      { path: 'state', component: StateComponent },
      
     
      { path: 'not-found', component: NotFoundComponent },
      { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
    ],
    canActivate: [RoutePermissionGuard],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
