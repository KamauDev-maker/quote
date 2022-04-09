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
    new Quote (1,'Marvin Kimathi','“Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.”','Oprah Winfrey',new Date(2021,11,12),3,0),
    new Quote (2,'Haimana Utu','“Never be ashamed of what you feel. You have the right to feel any emotion that you want, and to do what makes you happy. That’s my life motto.”','Demi Levato',new Date(2022,0,16),0,0),
    new Quote (3,'Andre Leon','“In life there is no real safety except for self-belief.”','Madonna',new Date(2021,6,08),0,0),
    new Quote (4,'Davine Phyllis','“I think that passion is the secret ingredient that drives hard work and excellence.”','Kelly Ayotte',new Date(2020,10,18),0,0),
    new Quote (5,'Oscar Kamau','“The man who does not read books has no advantage over the one who cannot read them.”','Mark Twain',new Date(2021,8,22),0,0),
    new Quote (6,'Shalyne Waweru','Accept what is, let go of what was and have faith in what will be.','John Doe',new Date(2021,11,12),0,0)
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
