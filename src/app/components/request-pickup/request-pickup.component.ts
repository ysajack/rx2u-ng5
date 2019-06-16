import { Component, OnInit } from '@angular/core';
import { InitialDataService } from '../../services/initial-data.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-request-pickup',
  templateUrl: './request-pickup.component.html',
  styleUrls: ['./request-pickup.component.css']
})
export class RequestPickupComponent implements OnInit {
  route = '/rxpickup';
  output;
  homeRoute;
  userLoggedin = this.dataService.userLoggedin;
  id = this.dataService.id;
  pw = this.dataService.pw;
  phone;
  firstName;
  lastName;
  profile: Profile;
  constructor(private dataService: InitialDataService, public appComp: AppComponent) {
    if (this.userLoggedin) {
      this.getUserProfile();
    }
  }
  ngOnInit() {
    this.appComp.setTitle('Rx Pickup');
    this.homeRoute = this.dataService.setHome();
  }
  clickContinueButton(first, last, phone, dob, address, pharmacy) {
    if (first !== '' && last !== '' && phone !== '' && dob !== '' && address !== '' && pharmacy !== '') {
      this.dataService.first = first;
      this.dataService.last = last;
      this.dataService.phone = phone;
      this.dataService.dob = dob;
      this.dataService.address = address;
      this.dataService.pharmacy = pharmacy;
      this.route = '/rxpickup/proxy';
    } else {
    }
  }
  logOff() {
    this.userLoggedin = false; // Override value from dataservice to update directly in the component;
    this.dataService.userLoggedin = false;
  }
  validateLogin(id, pw) {
    if (this.dataService.validateLogin(id, pw) === 0) {
      this.route = '';
      this.output = 'Incorrect user name and/or password. Please review and try again!';
    } else {
      this.route = '/users';
      this.dataService.id = id;
      this.dataService.pw = pw;
      this.dataService.userLoggedin = true;
    }
  }
  getUserProfile() {
    this.dataService.getUserProfile(this.phone).subscribe(profile => {
      this.profile = profile;
    });
  }
}
interface Profile {
  order_date;
  order_num;
  first;
  last;
  dob;
  address;
  pharmacy;
  cust_phone;
  status;
}
