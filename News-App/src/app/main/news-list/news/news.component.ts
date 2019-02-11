import { Component, OnInit, Input, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input() newsList: Object;

  @Output() loadMore: EventEmitter<any> = new EventEmitter();

  public loadMoreNews():void {
    this.loadMore.emit();
  }
  
  constructor() { }

  ngOnInit() {
  }

}
