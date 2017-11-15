import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InitialDataService {
  first;
  last;
  phone;
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
   homeNet = '10.0.0.41';
  // workNet = '10.227.212.187';
 // workNet2 = '10.227.212.53';
  network = this.homeNet;
  constructor(public http: Http) {
  }
  placeOrder(first, last, phone, dob, address, pharmacy) {
  return this.http.get('http://' + this.network + '/rx2u/placeorder.php?action=placeorder&first='
      + first + '&last=' + last + '&phone=' + phone + '&dob=' + dob + '&address=' + address + '&pharmacy=' + pharmacy)
      .map(res => res.text());
  }
  getmessage(indicator) {
    return this.http.get('http://' + this.network + '/rx2u/getmessage.php?action=getmsg' + '&indicator=' + indicator)
      .map(res => res.json());
  }
  putMessage(msg, indicator, user) {
   return this.http.get('http://' + this.network + '/rx2u/getmessage.php?action=putmsg&msg=' + msg + '&indicator='
     + indicator + '&user=' + user)
     .map(res => res.text());
  }
  checkOrder() {
   return this.http.get('http://' + this.network + '/rx2u/checkOrder.php').map(res => res.json());
  }
  lookupOrder(order) {
    return this.http.get('http://' + this.network + '/rx2u/orderlookup.php?ordernum=' + order)
      .map(res => res.json());
  }
  verifyLogin(id, pw) {
    return this.http.get('http://' + this.network + '/rx2u/login.php?username=' + id + '&password=' + pw).map(res => res.text());
  }
  getUserProfile(id, pw) {
    return this.http.get('http://' + this.network + '/rx2u/user_profile.php?action=getorder&first=' + id + '&last=' + pw)
      .map(res => res.json());
  }
  userReceive(order) {
   return this.http.get('http://' + this.network + '/rx2u/user_profile.php?action=receive&ordnum=' + order).map(res => res.text());
  }
  validateLogin(id, pw) {
    this.xhttp = new XMLHttpRequest();
    this.xhttp.open('GET', 'http://' + this.network + '/rx2u/login.php?username=' + id + '&password=' + pw, false);
    this.xhttp.send(null);

    if (this.xhttp.status == 200) {
      return this.response = this.xhttp.responseText;
    }
  }
  setHome() {
    if (this.userLoggedin) {
    return this.homeRoute = '/users';
    }else {
     return this.homeRoute = '';
    }
  }
}
