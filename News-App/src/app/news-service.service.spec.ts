import { TestBed } from '@angular/core/testing';

import { NewsServiceService } from './news-service.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('NewsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient,
      HttpHandler
    ]
  }));

  it('should be created', () => {
    const service: NewsServiceService = TestBed.get(NewsServiceService);
    expect(service).toBeTruthy();
  });
});
