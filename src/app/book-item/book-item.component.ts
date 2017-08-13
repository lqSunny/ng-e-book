import {Component, Input, OnInit} from '@angular/core';
import {EbookSummary} from '../ebook';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: EbookSummary;

  constructor() { }

  ngOnInit() {
  }

}
