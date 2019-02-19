import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NewsServiceService } from 'src/app/news-service.service';
import {Router} from '@angular/router';
import { Article } from 'src/app/article';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
 
  @Input() newsList: Article[];

  @Output() loadMore: EventEmitter<any> = new EventEmitter();

  public loadMoreNews():void {
    this.loadMore.emit();
  }

  constructor(
    private newsService: NewsServiceService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ){}

  ngOnInit() {
  }

  redirectSingleNews(article) {
    this.newsService.setSingleNews(article);
    let articleUrl = article.title.replace(/[^0-9^a-z^A-Z]/g, '-');
    this.router.navigate([{ outlets: { filtersOutlet: null } }])
              .then(() => this.router.navigate([`/single-news/${articleUrl}`]));
  }

  delete(news: Article) {
    this.newsService.deleteLocalNews(news.id).subscribe((response: any) => {
      news.isDeleted = true;
      this.cdr.detectChanges();
    })
  }

  edit(news: Article) {
    this.newsService.setSingleNews(news);
    this.router.navigate([{ outlets: { filtersOutlet: null } }])
              .then(() => this.router.navigate([`/edit`]));
  }

}