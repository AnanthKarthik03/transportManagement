import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionalServiceCBSComponent } from './additional-service-c-b-s/additional-service-c-b-s.component';
import { ConsigneeComponent } from './consignee/consignee.component';
import { ConsignmentBookingRegisterBuiltyReportComponent } from './consignment-booking-register-builty-report/consignment-booking-register-builty-report.component';
import { ConsignmentBookingRegisterComponent } from './consignment-booking-register/consignment-booking-register.component';
import { ConsignmentBookingComponent } from './consignment-booking/consignment-booking.component';
import { ConsignorComponent } from './consignor/consignor.component';
import { NewBiltyCnComponent } from './new-bilty-cn/new-bilty-cn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from '../app-routing.module';
import { Filter1Pipe } from '../pipe/filter1.pipe';
import { Filter2Pipe } from '../pipe/filter2.pipe';

@NgModule({
  declarations: [
    ConsignorComponent,
    NewBiltyCnComponent,
    ConsignmentBookingComponent,
    AdditionalServiceCBSComponent,
    ConsigneeComponent,
    ConsignmentBookingRegisterBuiltyReportComponent,
    ConsignmentBookingRegisterComponent,
    Filter1Pipe,
    Filter2Pipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
    TableModule,
    AppRoutingModule,
  ],
})
export class BookingModule {}
