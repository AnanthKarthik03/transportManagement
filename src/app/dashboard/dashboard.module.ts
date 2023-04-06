import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FixedFrameModule } from '../fixed-frame/fixedframe.module';
@NgModule({
  declarations: [
    SuperAdminDashboardComponent,
    VendorDashboardComponent,
    AdminDashboardComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, FixedFrameModule, AppRoutingModule],
})
export class dashboardModule {}
