import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './main/news-list/news-list.component';
import { NewsEditComponent } from './main/news-edit/news-edit.component';
import { NewsSingleComponent } from './main/news-single/news-single.component';
import { FiltersComponent } from './filters/filters.component';

export const routes: Routes = [
  {path: '', component: NewsListComponent},
  {path: 'edit', component: NewsEditComponent},
  {path: 'create', component: NewsEditComponent},
  {path: 'single-news/:id', component: NewsSingleComponent},
  {path: 'show-filter', component: FiltersComponent, outlet: 'filtersOutlet'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
