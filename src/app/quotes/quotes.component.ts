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
    new Quote (1,'Jane Doe','Accept what is, let go of what was and have faith in what will be.',new Date(2020,0,12)),
    new Quote (1,'Jane Doe','Accept what is, let go of what was and have faith in what will be.',new Date(2019,11,18)),
    new Quote (1,'Jane Doe','Accept what is, let go of what was and have faith in what will be.',new Date(2021,6,30)),
    new Quote (1,'Jane Doe','Accept what is, let go of what was and have faith in what will be.',new Date(2018,7,12)),
    new Quote (1,'Jane Doe','Accept what is, let go of what was and have faith in what will be.',new Date(2017,3,28)),
    new Quote (1,'Jane Doe','Accept what is, let go of what was and have faith in what will be.',new Date(2022,3,12)),
  ]
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);

    });
  }


  constructor() { }

  ngOnInit(): void {
  }

}
