import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { SourceComponent } from './source/source.component';
import { CreatedComponent } from './created/created.component';
import { AddingComponent } from './adding/adding.component';
import { FilterComponent } from './filter/filter.component';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        FiltersComponent,
        SourceComponent,
        CreatedComponent,
        AddingComponent,
        FilterComponent 
      ],
      providers: [
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
