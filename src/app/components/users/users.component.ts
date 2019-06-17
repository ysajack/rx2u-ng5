import { Component, OnInit } from '@angular/core';
import { InitialDataService } from '../../services/initial-data.service';
import { AppComponent } from '../../app.component';
import { OrderStatusComponent } from '../order-status/order-status.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 order: any = [];
 userLoggedin = true;
 first = this.dataService.id;
 last = this.dataService.pw;

  constructor(public dataService: InitialDataService, public appComp: AppComponent) { }

  ngOnInit() {
    this.appComp.setTitle('User Home');
    this.userLoggedin = true;
    this.getOrder();
  }
  logOff() {
    this.userLoggedin = false;
    this.dataService.userLoggedin = false;
  }
  receive(ord) {
    this.dataService.userReceive(ord).subscribe(res => {
      console.log(res);
      });
    this.getOrder();
  }
  getOrder () {
    this.dataService.getUserProfile(this.dataService.phone).subscribe(orderObj =>
      this.order = orderObj);
  }
}
