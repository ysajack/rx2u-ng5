import {Injectable} from '@angular/core';
// import {Http} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class InitialDataService {
  first;
  last;
  phone = '';
  dob;
  address;
  pharmacy;
  id = '';
  pw = '';
  xhttp;
  response;
  userLoggedin = false;
  homeRoute;

  network = 'https://rx2u-rest.appspot.com'; //change your REST endpoint, if you're building on your own

  constructor(public http: HttpClient) {
  }
  placeOrder(first, last, phone, dob, address, pharmacy) {
    return this.http.get(this.network + '/rest/orderService/placeOrder?first='
      + first + '&last=' + last + '&phone=' + phone + '&dob=' + dob + '&address=' + address + '&pharmacy=' + pharmacy);
  }
  checkOrder() {
    return this.http.get(this.network + '/rest/orderService/checkOrders');
  //  return this.http.get('http://' + '127.0.0.1' + '/rx2u/checkOrder.php');
  }
  lookupOrder(order) {
    return this.http.get(this.network + '/rest/orderService/lookupOrder/' + order);
  }
  getUserProfile(phoneNum) {
    return this.http.get(this.network + '/rest/customerService/getProfileView/' + phoneNum);
  }

  userReceive(order) {
    return this.http.get(this.network + '/rest/customerService/receive/' + order);
  }

  validateLogin(id, pw) {
    this.xhttp = new XMLHttpRequest();
    this.xhttp.open('GET', this.network + '/rest/customerService/authenticate?username=' + id + '&password=' + pw, false);
    this.xhttp.send(null);

    if (this.xhttp.status === 200) {
      return this.response = this.xhttp.responseText;
    }
  }

  setHome() {
    if (this.userLoggedin) {
      return this.homeRoute = '/users';
    } else {
      return this.homeRoute = '';
    }
  }

  validateCredentials(id, pw) {
    this.xhttp = new XMLHttpRequest();
    this.xhttp.open('GET', this.network + '/rest/customerService/authenticate?username=' + id + '&password=' + pw, false);
    this.xhttp.send(null);

    if (this.xhttp.status === 200) {
      return this.response = this.xhttp.responseText;
    }
  }
}

interface UserProfile {
  username;
  password;
  first;
  last;
  phone;
  dob;
  address;
  pharmacy;
}
