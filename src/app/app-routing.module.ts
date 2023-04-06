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
      { path: 'consignee', component: ConsigneeComponent },
      { path: 'table', component: LorryArrivalDetailsComponent },
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
