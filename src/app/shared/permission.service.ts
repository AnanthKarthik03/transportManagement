import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  branch: string = '';

  token: any = 'zw34567ugfvxdr6yg';
  roleId: any;

  users: any[] =[
    {username: 'super@gmail.com', password: 12345, roleId: 1},
    {username: 'admin@gmail.com', password: 12345, roleId: 2},
    {username: 'vendor@gmail.com', password: 12345, roleId: 3},
  ]

  constructor() { }

  roleIdInitialize(roleId: any) {
    this.roleId = roleId;
  }

  isAuthenticated(user: any, pwd: any) {
    const username = user;
    const password = pwd;

    const one_user = this.users.find((users) => {
      return (users.username == username && users.password == password);
    })

    return one_user.roleId;
  }
}
