import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote('Kevin Ligare', 'Work Hard','Ian Ombima')
  ]
  toggleName(index){
    this.quotes[index].showName = !this.quotes[index].showName;
  }
  deleteQuote(isComplete, index){
    if(isComplete){
      let toDelete= confirm('Are you sure you want to delete this quote?')
      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    
    this.quotes.push(quote)
  }
  upvote=0
  downvote=0
  upvotes(){
    this.upvote += 1
  }
  downvotes(){
    this.downvote += 1
  }
  constructor() { }

  ngOnInit(): void {
  }

}
