import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Article } from 'src/app/article';
import { Observable } from 'rxjs';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let newsServiceDeleteObserver = new Observable();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ NewsComponent ],
      providers: [
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    spyOn(component.loadMore, 'emit').and.stub;
    spyOn(component.newsService, 'deleteLocalNews').and.returnValue(newsServiceDeleteObserver);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit loadmore', () => {
    component.loadMoreNews();
    expect(component.loadMore.emit).toHaveBeenCalled();
  });

  it('should call newsService delete', () => {
    let dummyArticle = new Article();
    dummyArticle.id = 13;
    dummyArticle.isDeleted = false;
    component.delete(dummyArticle);    
    expect(component.newsService.deleteLocalNews).toHaveBeenCalledWith(dummyArticle.id);
  });

});
