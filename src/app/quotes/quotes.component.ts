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
    new Quote (1,'Marvin','"Accept what is, let go of what was and have faith in what will be."','Forte',new Date(2021,0,12),2,0),
    new Quote (2,'Shalyne','“Learn as if you will live forever, live like you will die tomorrow.”.','Mahatma Gandhi',new Date(2021,8,12),10,0),
    new Quote (3,'Andre','“When you change your thoughts, remember to also change your world.”.','Norman Vincent Peale',new Date(2020,0,12),0,3),
    new Quote (4,'Davine','“The only way of discovering the limits of the possible is to venture a little way past them into the impossible.” ','Arthur C. Clarke',new Date(2022,0,12),0,0),
    new Quote (5,'Natalie Kabaria','"The power of a positive thinking is like an engine that can take you to the summit of a mountain”','Natalia Kabaria',new Date(2022,3,9),0,0),
    new Quote (6,'Haimana','“If you don’t risk anything, you risk even more.”','John Doe',new Date(2022,0,1),0,0)
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
