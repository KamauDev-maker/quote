import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { DatePipePipe } from './date-pipe.pipe';
import { HighlightQuoteDirective } from './highlight-quote.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailComponent,
    DatePipePipe,
    HighlightQuoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
