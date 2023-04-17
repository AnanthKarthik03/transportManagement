import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionService } from 'src/app/shared/permission.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  roleId: number;
  branch: string = '';

  constructor(private router: Router, private service: PermissionService) {}

  ngOnInit(): void {
    this.roleId = +localStorage.getItem('id');
    // this.roleId = this.service.roleId;
    this.branch = localStorage.getItem('branch');
  }

  showHomeDashboard() {
    if (this.roleId == 1) {
      this.router.navigate(['dashboard/super-admin']);
    }

    if (this.roleId == 2) {
      this.router.navigate(['dashboard/admin']);
    }
    if (this.roleId == 3) {
      this.router.navigate(['dashboard/vendor']);
    }
  }

  onLogout() {
    localStorage.removeItem('id');
    this.router.navigate(['login']);
  }
  onProfile() {
    this.router.navigate(['dashboard/profile']);
  }
}
