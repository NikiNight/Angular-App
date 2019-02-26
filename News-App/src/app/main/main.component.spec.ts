import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { routes } from './../app-routing.module';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsSingleComponent } from './news-single/news-single.component';
import { FiltersComponent } from '../filters/filters.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NewsComponent } from './news-list/news/news.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SourceComponent } from '../filters/source/source.component';
import { FilterComponent } from '../filters/filter/filter.component';
import { CreatedComponent } from '../filters/created/created.component';
import { AddingComponent } from '../filters/adding/adding.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MainComponent,
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
      imports: [
        RouterModule.forRoot(routes),
        RouterTestingModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
