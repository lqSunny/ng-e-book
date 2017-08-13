import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {BooksSummaryComponent} from './books-summary/books-summary.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'bookssummary',
    component: BooksSummaryComponent
  },
  {
    path: 'bookdetail/:id',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
