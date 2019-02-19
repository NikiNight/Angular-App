import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/news-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  private isLocalState: boolean;

  constructor(private newsService: NewsServiceService) { }

  ngOnInit() {
    this.newsService.isLocalState.subscribe((isLocalState: boolean)=>{
      this.isLocalState = isLocalState;
    })
  }

  filter(item) {
    console.log('start filter');
    let filterValue = item.parentNode.querySelector('#filter__input').value;
    if(filterValue=='') {
      filterValue=null;
    }
    this.newsService.filteredNewsList.emit(filterValue);
  }

}
