import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from '../shared/permission.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(
    private message: ToastrService,
    private service: PermissionService
  ) {}

  ngOnInit() {
    if (this.service.tostrShow == true) {
      this.message.success('Successfull Login!!!');
    }
  }
}
