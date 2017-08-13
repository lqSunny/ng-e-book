import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {EbookSummary} from './ebook';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EbookService {

  private url = 'http://10.0.0.7:8080/book';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  // getBooksSummary(): Observable<EbookSummary[]> {
  //   return this.http.get(this.url)
  //     .map(response => response.json() as EbookSummary[]);
  // }

  getBooksSummary(): Promise<EbookSummary[]> {
    return this.http.get(this.url).toPromise()
      .then(response => response.json() as EbookSummary[])
      .catch(error => {
        console.error('错误：', error);
        return Promise.reject(error.message || error);
      });
  }
}

