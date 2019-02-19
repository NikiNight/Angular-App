import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/news-service.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  public heading : string = "Hot News";

  constructor(private newsService: NewsServiceService) { }

  ngOnInit() {
    this.newsService.updatedTitle.subscribe((status: string)=>{
      this.heading = status;
    })
  }

}
