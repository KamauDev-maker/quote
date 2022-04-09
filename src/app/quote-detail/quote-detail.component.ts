import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quoty: Quote;
  @Output() isRead = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isRead.emit(complete)
  }
  deleteQuote(read:boolean){
    this.isRead.emit(read)
  }
  upvote(){
    this.quoty.likes+=1;
  }
  downvote(){
    this.quoty.dislikes+=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
