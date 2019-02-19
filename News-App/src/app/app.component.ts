import { Component } from '@angular/core';
import { NewsServiceService } from './news-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NewsServiceService],
})
export class AppComponent {
  title = 'News-App';
}
