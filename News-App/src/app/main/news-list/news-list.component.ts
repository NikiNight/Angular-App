import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../../news-service.service';
import { Article } from '../../article'
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {

  public newsList: Article[];

  constructor(
    private newsService: NewsServiceService,
    private router: Router,
  ) { }

  public getNews(newsNumber: number) {
    this.newsService.getNewsList(newsNumber).subscribe((data: Article[]) => {
      this.newsList = data;
    });
  }

  ngOnInit() {
    //Get 5 API News on Init
    this.getNews(null);
    //Get News from API when source is changed
    this.newsService.sorcedNewsList.subscribe((sourceId: any)=>{
      this.newsService.sourceId = sourceId;
      this.getNews(null);
    })
    //Get News from API when filter is click
    this.newsService.filteredNewsList.subscribe((keyWords: any)=>{
      this.newsService.keyWords = keyWords;
      this.getNews(null);
    })
    //Get News From API or Local server when local checkbox is changed
    this.newsService.isLocalState.subscribe((isLocalState: boolean)=>{
      this.newsService.isLocal = isLocalState;
      console.log('islocal emit render');
      if (isLocalState) {
        this.newsService.getLocalNewsList().subscribe((data: Article[]) => {
          this.newsList = data;
        });
      } else {
        this.getNews(null);
      }
    })
    //Add filter to the home page
    this.router.navigate([{outlets: {filtersOutlet: ['show-filter']}}]);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.newsService.updatedTitle.emit('Hot News');
    }, 0);
  }

  delete() {
    console.log('Delete news');
  }

  loadMoreNews() {
    this.getNews(this.newsList.length + 5);
  }

}
