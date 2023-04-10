import { Component } from '@angular/core';

@Component({
  selector: 'app-menifestlist',
  templateUrl: './menifestlist.component.html',
  styleUrls: ['./menifestlist.component.css']
})
export class MenifestlistComponent {
  mlist: any[];
  i: number = 0;

  ngOnInit(): void {
    this.mlist = [
      {
        MFNo:'WB25G-0734',
        Date:'Lorry',
        From:'TRUCK12W',
        To:'',
        VehicleNo:'Ashok Kr. Yadav',
        Status:'Parmesh Kr. Yadav',
        Action:''
      }];
    }
  

}
