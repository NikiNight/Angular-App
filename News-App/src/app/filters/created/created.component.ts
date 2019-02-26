import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/news-service.service';

@Component({
  selector: 'app-created',
  templateUrl: './created.component.html',
  styleUrls: ['./created.component.scss']
})
export class CreatedComponent implements OnInit {

  constructor(public newsService: NewsServiceService) { }

  ngOnInit() {
  }

  changeCreatedNews(state) {
    this.newsService.isLocalState.emit(state.checked);
  }

}
