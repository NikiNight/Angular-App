import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatedComponent } from './created.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CreatedComponent', () => {
  let component: CreatedComponent;
  let fixture: ComponentFixture<CreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedComponent ],
      providers: [
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedComponent);
    component = fixture.componentInstance;
    spyOn(component.newsService.isLocalState, 'emit').and.stub;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit isLocalState', () => {
    let mockState = {checked: true};
    component.changeCreatedNews(mockState);
    expect(component.newsService.isLocalState.emit).toHaveBeenCalledWith(true);
  });
});
