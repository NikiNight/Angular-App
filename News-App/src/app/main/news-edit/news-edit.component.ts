import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsServiceService } from 'src/app/news-service.service';
import { Router } from '@angular/router';
import { Article } from 'src/app/article';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss']
})
export class NewsEditComponent implements OnInit {

  public headingControl: FormControl = new FormControl('', [Validators.required]);
  public descriptionControl: FormControl = new FormControl('');
  public contentControl: FormControl = new FormControl('', [Validators.required]);
  public imageControl: FormControl = new FormControl('');
  public dateControl: FormControl = new FormControl('');
  public authorControl: FormControl = new FormControl('');
  public sourceUrlControl: FormControl = new FormControl('');
  public newsFormGroup: FormGroup = new FormGroup({
    title: this.headingControl,
    author: this.authorControl,
    description: this.descriptionControl,
    content: this.contentControl,
    urlToImage: this.imageControl,
    publishedAt: this.dateControl,
    sourceUrl: this.sourceUrlControl,
  });
  private articleId: number;

  constructor(
    private newsService: NewsServiceService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    if(this.router.url == '/edit') {
      let article = this.newsService.getSingleNews();
      this.articleId = article.id;
      this.updateFields(article);
    } else {
      this.articleId = null;
      this.dateControl.setValue(new Date());
    }
    
    console.log(this.router);
  }

  cancel(e) {
    e.preventDefault();
    console.log('cancel changes');
  }

  public updateFields (article: Article) {
    this.headingControl.setValue(article.title);
    this.authorControl.setValue(article.author);
    this.descriptionControl.setValue(article.description);
    this.contentControl.setValue(article.content);
    this.imageControl.setValue(article.urlToImage);
    this.dateControl.setValue(article.publishedAt);
    this.sourceUrlControl.setValue(article.sourceUrl);
  }

  public handleResponse() {

    let article = {
      id: this.newsFormGroup.value.id,
      author: this.newsFormGroup.value.author,
      title: this.newsFormGroup.value.title,
      description: this.newsFormGroup.value.text,
      urlToImage: this.newsFormGroup.value.image,
      publishedAt: this.newsFormGroup.value.date,
      content: this.newsFormGroup.value.content,
      isLocal: true,
    }
    this.newsService.setSingleNews(article);
    let articleUrl = article.title.replace(/[^0-9^a-z^A-Z]/g, '-');
    this.router.navigate([{ outlets: { filtersOutlet: null } }])
              .then(() => this.router.navigate([`/single-news/${articleUrl}`]));
  }

  public submit():void {
    if(this.articleId) {
      this.newsService.changeLocalNews(this.articleId, this.newsFormGroup.value).subscribe(
        (response) => this.handleResponse(),
        (error) => console.log(error)
      );
    } else {
      this.newsService.postLocalNews(this.newsFormGroup.value).subscribe(
        (response) => this.handleResponse(),
        (error) => console.log(error)
      )
    }
  }  

}
