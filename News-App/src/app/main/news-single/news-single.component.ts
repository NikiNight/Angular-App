import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.component.html',
  styleUrls: ['./news-single.component.scss']
})
export class NewsSingleComponent implements OnInit {

  public news: Object = {
    title: 'Earum ipsam fugiat ipsum mollitia iure tempora eum.',
    date: 'Tue Aug 07 2018 12:10:03 GMT+0300 (Belarus Standard Time)',
    fulltext: 'Non quos consequuntur a ut nemo. Pariatur qui quasi iure et cupiditate iusto ipsam dicta dolores. Ex eum voluptatem dolorem. Animi eveniet unde hic adipisci quia sit odio. Qui sit dolore aspernatur minus. Voluptatibus qui ducimus sed aut architecto facilis id ipsum iusto.',
    img: 'http://lorempixel.com/640/480/business',
    author: 'Jaclyn Collins'
  };

  constructor() { }

  ngOnInit() {
  }

}
