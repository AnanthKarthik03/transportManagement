import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionService } from 'src/app/shared/permission.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  roleId: any;

  constructor(private router: Router, private service: PermissionService) {}

  ngOnInit(): void {
    this.roleId = this.service.roleId;
  }

  onoLogout() {
    this.router.navigate(['login']);
  }
  onProfile() {
    this.router.navigate(['dashboard/profile']);
  }

}
