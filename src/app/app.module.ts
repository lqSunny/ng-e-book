import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BooksSummaryComponent } from './books-summary/books-summary.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AppRoutingModule } from './app-routing.module';
import {EbookService} from './ebook.service';
import {HttpModule} from '@angular/http';
import { BookItemComponent } from './book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksSummaryComponent,
    LoginComponent,
    BookDetailComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
    // NgbModule.forRoot()
  ],
  providers: [
    EbookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
