import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public name : string = "Your Name";

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log('login');
  }

}
