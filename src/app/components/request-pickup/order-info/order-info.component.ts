import { Component, OnInit } from '@angular/core';
import { InitialDataService } from '../../../services/initial-data.service';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {
  fullName = '';
  phoneNum = '';
  orderNum: any;
  homeRoute;
  userLoggedin = this.dataService.userLoggedin;
  first = this.dataService.id;
  last = this.dataService.pw;

  constructor(public dataService: InitialDataService, public appComp: AppComponent) {
  }

  ngOnInit() {
    this.appComp.setTitle('Order Info');
    this.phoneNum = this.dataService.phone;
    if (this.phoneNum !== '' || this.phoneNum != null) {
      this.fullName = this.dataService.first + ' ' + this.dataService.last;
      this.dataService.placeOrder(this.dataService.first, this.dataService.last, this.phoneNum,
        this.dataService.dob, this.dataService.address, this.dataService.pharmacy).subscribe(order => {
        this.orderNum = order;
      });
    }
    this.homeRoute = this.dataService.setHome();
  }
  logOff() {
    this.userLoggedin = false; // Override value from dataservice to update directly in the component;
    this.dataService.userLoggedin = false;
  }
}
