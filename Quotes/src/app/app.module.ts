import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotedetailComponent } from './quotedetail/quotedetail.component';
import { UpvoteDirective } from './upvote.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesFormComponent,
    QuoteComponent,
    QuotedetailComponent,
    UpvoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
