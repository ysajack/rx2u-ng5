import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
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

  // proxy = 'https://cors-anywhere.herokuapp.com/';
  // homeNet = '10.0.0.41';
  homeNet = '127.0.0.1';
  // workNet = '10.227.212.187';
  // workNet2 = '10.227.212.53';
  cloudRest = 'http://rx2u-rest.appspot.com';
  network = this.cloudRest;

  constructor(public http: Http) {
  }

  placeOrder(first, last, phone, dob, address, pharmacy) {
    return this.http.get('http://' + this.network + '/rest/orderService/placeOrder?first='
      + first + '&last=' + last + '&phone=' + phone + '&dob=' + dob + '&address=' + address + '&pharmacy=' + pharmacy)
      .map(res => res.text());
  }
  checkOrder() {
    return this.http.get('http://' + this.network + '/rest/orderService/checkOrders').map(res => res.json());
  }
  lookupOrder(order) {
    return this.http.get('http://' + this.network + '/rest/orderService/lookupOrder/' + order)
      .map(res => res.json());
  }
  getUserProfile(phoneNum) {
    return this.http.get('http://' + this.network + '/rest/customerService/getProfileView/' + phoneNum)
      .map(res => res.json());
  }

  userReceive(order) {
    return this.http.get('http://' + this.network + '/rest/customerService/receive/' + order).map(res => res.text());
  }

  validateLogin(id, pw) {
    this.xhttp = new XMLHttpRequest();
    this.xhttp.open('GET', 'http://' + this.network + '/rest/customerService/authenticate?username=' + id + '&password=' + pw, false);
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
    this.xhttp.open('GET', 'http://' + this.network + '/rest/customerService/authenticate?username=' + id + '&password=' + pw, false);
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
