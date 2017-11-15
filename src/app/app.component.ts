import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private title: Title) {
  }
  ngOnInit() {
  }
  setTitle(title) {
    this.title.setTitle(title);
  }
 }
