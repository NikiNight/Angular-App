import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { SourceType } from '../app/source-type'
import { NewsType } from '../app/news-type'
import { Article } from './article';
import { EventEmitter } from '@angular/core';
import { NewsLocalType } from './news-local-type';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';

@Injectable({
  providedIn: 'root'
})

export class NewsServiceService {

  constructor(private httpClient: HttpClient) { }

  public article: Article;
  public sourceId: string;
  public keyWords: string;
  public isLocal: boolean;

  public getSources(){
    return this.httpClient.get<SourceType>('https://newsapi.org/v2/sources?apiKey=59e5ec14708e4b768acc8a0664f22906').pipe(
      map((response: SourceType) => {
        const data = [];
        response.sources.forEach((element) => {
          data.push({id: element.id, name: element.name})
        })
        return data;
      })
    );
  }

  public getNewsList(articlesNumber) {
    return this.httpClient.get<NewsType>(`https://newsapi.org/v2/top-headlines?pageSize=${articlesNumber ? articlesNumber : 5}${this.sourceId ? `&sources=${this.sourceId}` : ''}${this.keyWords ? `&q=${this.keyWords}` : ''}&apiKey=59e5ec14708e4b768acc8a0664f22906&language=en`).pipe(
      map((response: NewsType) => {
        const data = [];
        response.articles.forEach((element) => {
          data.push({
                      author: element.author,
                      title: element.title,
                      description: element.description,
                      urlToImage: element.urlToImage,
                      publishedAt: element.publishedAt,
                      content: element.content,
                      isLocal: false,
                    })
        })
        return data;
      })
    );
  }

  public getLocalNewsList() {
    return this.httpClient.get<NewsLocalType[]>('http://localhost:3000/news').pipe(
      map((response: NewsLocalType[]) => {
        const data = [];
        response.forEach((element) => {
          data.push({
                      id: element.id,
                      author: element.author,
                      title: element.title,
                      description: element.text,
                      urlToImage: element.image,
                      publishedAt: element.date,
                      content: element.content,
                      isLocal: true,
                    })
        })
        return data;
      })
    );
  }

  public postLocalNews(article: Article) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let articleLocal = {
      title:      article.title,
      author:     article.author,
      text:       article.description,
      date:       article.publishedAt,
      contet:     article.content,
      image:      article.urlToImage,
      sourceUrl:  article.sourceUrl,
    };
    return this.httpClient.post<NewsLocalType>('http://localhost:3000/news', articleLocal, httpOptions);
  }

  public changeLocalNews (id, article) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let articleLocal = {
      title:      article.title,
      author:     article.author,
      text:       article.description,
      date:       article.publishedAt,
      contet:     article.content,
      image:      article.urlToImage,
      sourceUrl:  article.sourceUrl,
    };
    return this.httpClient.put<NewsLocalType>(`http://localhost:3000/news/${id}`, articleLocal, httpOptions);
  }

  public deleteLocalNews (id: number) {
    return this.httpClient.delete<any>(`http://localhost:3000/news/${id}`);
  }

  //Show single news page

  public setSingleNews(article) {
    this.article = article;
  }
  public getSingleNews() {
    return this.article;
  }

  public updatedTitle: EventEmitter<string> = new EventEmitter();

  public sorcedNewsList: EventEmitter<any> = new EventEmitter();

  public filteredNewsList: EventEmitter<any> = new EventEmitter();

  public isLocalState: EventEmitter<boolean> = new EventEmitter();
}
