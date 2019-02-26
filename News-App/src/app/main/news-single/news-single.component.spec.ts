import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSingleComponent } from './news-single.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import { NewsListComponent } from '../news-list/news-list.component';
import { NewsEditComponent } from '../news-edit/news-edit.component';
import { FiltersComponent } from 'src/app/filters/filters.component';
import { NewsComponent } from '../news-list/news/news.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SourceComponent } from 'src/app/filters/source/source.component';
import { CreatedComponent } from 'src/app/filters/created/created.component';
import { FilterComponent } from 'src/app/filters/filter/filter.component';
import { AddingComponent } from 'src/app/filters/adding/adding.component';

describe('NewsSingleComponent', () => {
  let component: NewsSingleComponent;
  let fixture: ComponentFixture<NewsSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NewsSingleComponent,
        NewsListComponent,
        NewsEditComponent,
        FiltersComponent,
        NewsComponent,
        SourceComponent,
        CreatedComponent,
        FilterComponent,
        AddingComponent
      ],
      providers: [
        HttpClient,
        HttpHandler
      ],
      imports: [
        RouterModule.forRoot(routes),
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
