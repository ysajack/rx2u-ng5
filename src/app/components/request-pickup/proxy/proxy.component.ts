import { Component, OnInit } from '@angular/core';
import { InitialDataService } from '../../../services/initial-data.service';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.css']
})
export class ProxyComponent implements OnInit {
  firstName;
  lastName;
  phoneNum;
  dOb;
  aDdress;
  pHarmacy;
  homeRoute;
  constructor(public dataService: InitialDataService) { }

  ngOnInit() {
   this.phoneNum = this.dataService.phone;
   this.firstName = this.dataService.first;
   this.lastName = this.dataService.last;
   this.dOb = this.dataService.dob;
   this.aDdress = this.dataService.address;
   this.pHarmacy = this.dataService.pharmacy;
    this.homeRoute = this.dataService.setHome();
  }
}
