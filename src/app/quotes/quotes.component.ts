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
    new Quote (1,'Jane Doe','Accept what is, let go of what was and have faith in what will be.'),
    new Quote (1,'Jane Doe','Accept what is, let go of what was and have faith in what will be.'),
    new Quote (1,'Jane Doe','Accept what is, let go of what was and have faith in what will be.'),
    new Quote (1,'Jane Doe','Accept what is, let go of what was and have faith in what will be.'),
    new Quote (1,'Jane Doe','Accept what is, let go of what was and have faith in what will be.'),
    new Quote (1,'Jane Doe','Accept what is, let go of what was and have faith in what will be.'),
  ]
  get sortQuotes() {
    return this.quotes.sort((a, b) => {

    });
  }


  constructor() { }

  ngOnInit(): void {
  }

}
