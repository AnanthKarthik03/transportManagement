import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicleregister',
  templateUrl: './vehicleregister.component.html',
  styleUrls: ['./vehicleregister.component.css']
})

export class VehicleregisterComponent {
  constructor(private router: Router) {}
  vehiclelist: any[];
  i: number = 0;

  ngOnInit(): void {
  this.vehiclelist = [
    {
      Registrationno:'WB25G-0734',
                      VehicleType:'Lorry',
                      Model:'TRUCK12W',
                      MakerName:'',
                      OwnerName:'Ashok Kr. Yadav',
                      DriverName:'Parmesh Kr. Yadav',
                      Chessisno:'',
                      Engineno:'',
                      Color:'White',
                      VehicleHire: '',
    }];
  }

}