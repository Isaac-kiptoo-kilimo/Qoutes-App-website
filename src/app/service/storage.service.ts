import { Injectable } from '@angular/core';
import { Quote } from '../model/quote';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  quotes: Quote[] =  [
    new Quote(1, 'Isaac Kiptoo', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Nigerian',0, 0, new Date()),
    new Quote(2, 'Isaac Kiptanui', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Kenyan',0, 0, new Date()),
    new Quote(3, 'Isaac Kiptoo', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Zambian',0, 0, new Date()),
    new Quote(4, 'Isaac Kiptoo', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Rwandis',0, 0, new Date())
  ];
getQuotes(){
  return this.quotes
}
getQuote(id:number){
  return this.quotes.find(quote=>quote.id===id)
}
addQuote(quote:Quote){
  const quote_id=this.quotes.length+1;
  quote.id=quote_id;
  const new_quotes=[...this.quotes,quote];
  this.quotes=new_quotes
}
upvoteQuote(quote:Quote){
  quote.upvotes++;

}
downVotesQuote(quote:Quote){
  quote.downvotes++;
}
deleteQuote( quote :Quote){
  this.quotes.splice(this.quotes.indexOf(quote,1))
}
  constructor() { }
}
