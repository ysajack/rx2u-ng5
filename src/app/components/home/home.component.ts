import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { InitialDataService } from '../../services/initial-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  output;
  route;
  userLoggedin = this.dataService.userLoggedin;
  first = this.dataService.id;
  last = this.dataService.pw;
  constructor(public appComp: AppComponent, public dataService: InitialDataService) { }

  ngOnInit() {
    this.appComp.setTitle('Home');
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
}
