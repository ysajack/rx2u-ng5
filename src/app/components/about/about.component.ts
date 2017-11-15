import { Component, OnInit } from '@angular/core';
import { InitialDataService } from '../../services/initial-data.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 coveredMessage: Message[];
 suggestionMessage: Message[];
 commentMessage: Message[];
  output;
  route = '/about';
  userLoggedin = this.dataService.userLoggedin;
  first = this.dataService.id;
  last = this.dataService.pw;
  user;
  homeRoute;

  constructor(public dataService: InitialDataService, public appComp: AppComponent) {
  }

  ngOnInit() {
    this.dataService.getmessage('covered').subscribe(msg => {
      this.coveredMessage = msg;
    });
    this.dataService.getmessage('suggestion').subscribe(msg => {
      this.suggestionMessage = msg;
    });
    this.dataService.getmessage('comment').subscribe(msg => {
      this.commentMessage = msg;
    });
    this.appComp.setTitle('About');
    if (this.userLoggedin) {
      this.user = this.first + this.last;
    }else {
      this.user = '';
    }
    this.homeRoute = this.dataService.setHome();
  }
  suggest(msg) {
    this.dataService.putMessage(msg.value, 'suggestion', this.user).subscribe(tx => {
      console.log(tx);
    });
    this.dataService.getmessage('suggestion').subscribe(msg2 => {
      this.suggestionMessage = msg2;
    });
  }
  giveComment(msg) {
    this.dataService.putMessage(msg.value, 'comment', this.user).subscribe(tx => {
      console.log(tx);
    });
    this.dataService.getmessage('comment').subscribe(msg2 => {
      this.commentMessage = msg2;
    });
  }
  logOff() {
    this.userLoggedin = false; // Override value from dataservice to update directly in the component;
    this.dataService.userLoggedin = false;
  }
  validateLogin(id, pw) {
    if (this.dataService.validateLogin(id, pw) == 0) {
      this.route = '/about';
      this.output = 'Incorrect user name and/or password. Please review and try again!';
    } else {
      this.route = '/users';
      this.dataService.id = id;
      this.dataService.pw = pw;
      this.dataService.userLoggedin = true;
    }
  }
}
interface Message {
  message;
  user;
}
