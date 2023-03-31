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
