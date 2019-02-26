import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeadingComponent } from './heading/heading.component';
import { FiltersComponent } from './filters/filters.component';
import { MainComponent } from './main/main.component';
import { SourceComponent } from './filters/source/source.component';
import { FilterComponent } from './filters/filter/filter.component';
import { CreatedComponent } from './filters/created/created.component';
import { AddingComponent } from './filters/adding/adding.component';
import { NewsListComponent } from './main/news-list/news-list.component';
import { NewsSingleComponent } from './main/news-single/news-single.component';
import { NewsEditComponent } from './main/news-edit/news-edit.component';
import { NewsComponent } from './main/news-list/news/news.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      HeadingComponent,
      FiltersComponent,
      MainComponent,
      SourceComponent,
      FilterComponent,
      CreatedComponent,
      AddingComponent,
      NewsListComponent,
      NewsSingleComponent,
      NewsEditComponent,
      NewsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule
   ],
   exports: [
      NewsListComponent,
      ReactiveFormsModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
})
export class AppModule { }
