import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { routes } from './../../app-routing.module';
import { NewsListComponent } from './news-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NewsComponent } from './news/news.component';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NewsEditComponent } from '../news-edit/news-edit.component';
import { NewsSingleComponent } from '../news-single/news-single.component';
import { FiltersComponent } from 'src/app/filters/filters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SourceComponent } from 'src/app/filters/source/source.component';
import { FilterComponent } from 'src/app/filters/filter/filter.component';
import { CreatedComponent } from 'src/app/filters/created/created.component';
import { AddingComponent } from 'src/app/filters/adding/adding.component';

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule.forRoot(routes),
        ReactiveFormsModule
      ],
      declarations: [ 
        NewsListComponent,
        NewsEditComponent,
        NewsSingleComponent,
        NewsComponent,
        FiltersComponent,
        SourceComponent,
        FilterComponent,
        CreatedComponent,
        AddingComponent
      ],
      providers: [
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    spyOn(component, 'getNews').and.stub;
    spyOn(component.newsService.updatedTitle, 'emit').and.stub;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getNews', () => {
    component.newsList = [];
    component.newsList.length = 20;
    component.loadMoreNews();
    expect(component.getNews).toHaveBeenCalledWith(25);
  });

  
  it('should emit updateTitle', () => {
    jasmine.clock().install();
    component.ngAfterViewInit();
    expect(component.newsService.updatedTitle.emit).not.toHaveBeenCalled();
    jasmine.clock().tick(50);
    expect(component.newsService.updatedTitle.emit).toHaveBeenCalled();
    jasmine.clock().uninstall(); 
  });

});
