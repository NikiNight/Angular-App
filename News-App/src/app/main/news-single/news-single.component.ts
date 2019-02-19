import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NewsServiceService } from 'src/app/news-service.service';
import { Article } from 'src/app/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.component.html',
  styleUrls: ['./news-single.component.scss'],
})

export class NewsSingleComponent implements OnInit {

  public singleNews: Article;

  constructor(
    private newsService: NewsServiceService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.singleNews = this.newsService.getSingleNews();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.newsService.updatedTitle.emit(this.singleNews.title);
    }, 0);
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
