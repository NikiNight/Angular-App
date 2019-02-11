import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss']
})
export class SourceComponent implements OnInit {

  public sourcesList: Object = [
    {source: 'MacGyver - Murazik'},
    {source: 'Schamberger and Sons'},
    {source: 'Heathcote - Marvin'},
    {source: 'Bosco Inc'},
  ];
    
  constructor() { }

  ngOnInit() {
  }

  changeSource() {
    console.log('Change select state');
  }

}
