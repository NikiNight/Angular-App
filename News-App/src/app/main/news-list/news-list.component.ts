import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  public newsList: Object = [
    {
      title: 'Earum ipsam fugiat ipsum mollitia iure tempora eum.',
      date: 'Tue Aug 07 2018 12:10:03 GMT+0300 (Belarus Standard Time)',
      text: 'Non quos consequuntur a ut nemo. Pariatur qui quasi iure et cupiditate iusto ipsam dicta dolores. Ex eum voluptatem dolorem. Animi eveniet unde hic adipisci quia sit odio. Qui sit dolore aspernatur minus. Voluptatibus qui ducimus sed aut architecto facilis id ipsum iusto.',
      img: 'http://lorempixel.com/640/480/business'
    },
    {
      title: 'ut nemo sunt',
      date: 'Mon Aug 20 2018 12:22:50 GMT+0300 (Belarus Standard Time)',
      text: 'Rem at quod molestiae. Laudantium tenetur nemo ab sed dolor. Voluptates facere eum quia voluptate omnis in laboriosam et iste. Nulla in officia inventore harum.',
      img: 'http://lorempixel.com/640/480/fashion'
    },
    {
      title: 'Consequatur qui incidunt.',
      date: 'Fri Jan 25 2019 04:47:17 GMT+0300 (Belarus Standard Time)',
      text: 'Explicabo natus dignissimos et. Repellat nam tempora perspiciatis eos minus. Est est qui accusamus molestiae voluptatem laudantium repellat aut. Molestiae sapiente voluptatibus. Accusamus suscipit id sed cum. Eaque corporis autem quidem repudiandae et accusamus maxime. Qui sunt expedita rerum rerum sed quo dolores. Tenetur magnam velit laudantium. Rem et labore quidem animi. Voluptas molestiae nihil eius mollitia. Dolore nisi voluptatem beatae dolorum necessitatibus veniam dolorem.',
      img: 'http://lorempixel.com/640/480/sports'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  delete() {
    console.log('Delete news');
  }

  loadMoreNews() {
    console.log('Load more News');
  }

}
