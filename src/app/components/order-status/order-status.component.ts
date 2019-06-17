import { Component, OnInit } from '@angular/core';
import { InitialDataService } from '../../services/initial-data.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {
 orders: any;
 orderNum = '';
 status = '';
  output;
  route = '/orderstatus';
  response;
  userLoggedin = this.dataService.userLoggedin;
  first = this.dataService.id;
  last = this.dataService.pw;
  homeRoute;

  constructor(public dataService: InitialDataService, public appComp: AppComponent) {
    this.dataService.checkOrder().subscribe(order => {
      this.orders = order;
    });
  }

  ngOnInit() {
    this.appComp.setTitle('Order Status');
    this.homeRoute = this.dataService.setHome();
  }

  lookupOrder(order) {
    this.orderNum = order.value;
    this.dataService.lookupOrder(this.orderNum).subscribe((lookup => {
      this.orders = lookup;
    }));
  }
  logOff() {
    this.userLoggedin = false; // Override value from dataservice to update directly in the component;
    this.dataService.userLoggedin = false;
  }
  validateLogin(id, pw) {
    if (this.dataService.validateLogin(id, pw) === 0) {
      this.route = '/orderstatus';
      this.output = 'Incorrect user name and/or password. Please review and try again!';
    } else {
      this.route = '/users';
      this.dataService.id = id;
      this.dataService.pw = pw;
      this.dataService.userLoggedin = true;
    }
  }
}


