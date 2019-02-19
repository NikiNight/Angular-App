import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../../news-service.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss'],
})
export class SourceComponent implements OnInit {

  private isLocalState: boolean;

  public sourcesList: [
    {
        id: string,
        name: string,
    }
  ];
    
  constructor(private newsService: NewsServiceService) { }

  ngOnInit() {
    this.newsService.getSources().subscribe((data: [{id: string, name: string}]) => {
      this.sourcesList = data;
      return this.sourcesList;
    });
    this.newsService.isLocalState.subscribe((isLocalState: boolean)=>{
      this.isLocalState = isLocalState;
    })
  }

  changeSource(source) {
    let sourceId = source.value;
    let sourceName = source.options[source.selectedIndex].getAttribute('data-name');
    if(sourceId=='allsources') {
      sourceId=null;
    }
    this.newsService.updatedTitle.emit(sourceName);
    this.newsService.sorcedNewsList.emit(sourceId);
  }

}
