import { Component, OnInit } from '@angular/core';
import {EbookService} from '../ebook.service';
import {EbookSummary} from '../ebook';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-books-summary',
  templateUrl: './books-summary.component.html',
  styleUrls: ['./books-summary.component.css']
})
export class BooksSummaryComponent implements OnInit {
  books: EbookSummary[] = [];
  private subject = new Subject<string>();

  constructor(private ebookService: EbookService) { }

  ngOnInit() {
    this.buildView();
  }

  buildView(): void {
    // this.books.push(
    //   new EbookSummary(1, 'angular4', '在北京啊苏大哈省比赛的 v 弄店铺 v 你送的 v', 'assets/images/BadlandsHeadlights.jpg', 8.9),
    //   new EbookSummary(1, 'TYpeScript', '回复 i 哦是否从阿佛俄方法国么人格皮革他还是他如何 v 弄店铺 v 你送的 v', 'assets/images/pic.jpg', 9.3)
    // );

    this.ebookService.getBooksSummary().then(result => result.forEach(b => this.books.push(
      new EbookSummary(b.id, b.name, b.description, 'assets/images/pic.jpg', b.rating)
    )));
  }

}
