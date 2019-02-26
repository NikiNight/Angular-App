import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { routes } from './../../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsEditComponent } from './news-edit.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NewsListComponent } from '../news-list/news-list.component';
import { NewsSingleComponent } from '../news-single/news-single.component';
import { FiltersComponent } from 'src/app/filters/filters.component';
import { NewsComponent } from '../news-list/news/news.component';
import { SourceComponent } from 'src/app/filters/source/source.component';
import { FilterComponent } from 'src/app/filters/filter/filter.component';
import { CreatedComponent } from 'src/app/filters/created/created.component';
import { AddingComponent } from 'src/app/filters/adding/adding.component';
import { Article } from 'src/app/article';

describe('NewsEditComponent', () => {
  let component: NewsEditComponent;
  let fixture: ComponentFixture<NewsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NewsEditComponent,
        NewsListComponent,
        NewsSingleComponent,
        NewsComponent,
        FiltersComponent,
        SourceComponent,
        FilterComponent,
        CreatedComponent,
        AddingComponent
    ],
      imports: [
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
      ],
      providers: [
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update form values', () => {
    let dummyArticle:Article = new Article();
    dummyArticle.sourceUrl = 'sourceUrl_dummy';
    component.updateFields(dummyArticle);
    expect(component.sourceUrlControl.value).toEqual(dummyArticle.sourceUrl);
  });
});
