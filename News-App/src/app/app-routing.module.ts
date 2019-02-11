import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './main/news-list/news-list.component';
import { NewsEditComponent } from './main/news-edit/news-edit.component';
import { NewsSingleComponent } from './main/news-single/news-single.component';

const routes: Routes = [
  {path: '', component: NewsListComponent},
  {path: 'edit', component: NewsEditComponent},
  {path: 'create', component: NewsEditComponent},
  {path: ':id', component: NewsSingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
