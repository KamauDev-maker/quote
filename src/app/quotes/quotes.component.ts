import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'empowering quotes'
  quotes:Quote[] = [
    new Quote (1,'Jane Doe','Accept what is, let go of what was and have faith in what will be.','John Doe',new Date(2020,0,12),2,0),
    new Quote (2,'Jane Doe','Accept what is, let go of what was and have faith in what will be.','John Doe',new Date(2020,0,12),0,0),
    new Quote (3,'Jane Doe','Accept what is, let go of what was and have faith in what will be.','John Doe',new Date(2020,0,12),0,0),
    new Quote (4,'Jane Doe','Accept what is, let go of what was and have faith in what will be.','John Doe',new Date(2020,0,12),0,0),
    new Quote (5,'Jane Doe','Accept what is, let go of what was and have faith in what will be.','John Doe',new Date(2020,0,12),0,0),
    new Quote (6,'Jane Doe','Accept what is, let go of what was and have faith in what will be.','John Doe',new Date(2020,0,12),0,0)
  ]
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);

    });
  }
  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead: any, index: any){
    if (isRead){
      let toDelete = confirm('Are you sure you want to delete this Quote?')
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
  }

  displayInfo(index:any){
    this.quotes[index].showInfo = !this.quotes[index].showInfo
  }


  
  constructor() { }

  ngOnInit(): void {
  }

}
