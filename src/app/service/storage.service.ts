import { Injectable } from '@angular/core';
import { Quote } from '../model/quote';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  quotes: Quote[] =  [
    new Quote(1, 'Isaac Kiptoo', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Nigerian',0, 0, new Date(),false),
    new Quote(2, 'Isaac Kiptanui', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Kenyan',0, 0, new Date(),false),
    new Quote(3, 'Isaac Kiptoo', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Zambian',0, 0, new Date(),false),
    new Quote(4, 'Isaac Kiptoo', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Rwandis',0, 0, new Date(),false)
  ];
getQuotes(){
  this.setBestQuote()
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
upvoteQuote(id:number){
  const q = this.getQuote(id)
    if(q){
      q.upvotes += 1;
    }
    this.setBestQuote();

}
downVotesQuote(id:number){
  const q = this.getQuote(id)
  if(q){ if(q){
    q.upvotes += 1;
  }
  this.setBestQuote();
    q.downvotes += 1;
  }
  this.setBestQuote();
}
deleteQuote( id:number){
  const q = this.getQuote(id)
  if(q){
    this.quotes.splice(this.quotes.indexOf(q,1))
  }
  this.setBestQuote();
 
}
  constructor() { }

  setBestQuote(){
    this.quotes.forEach(quote => quote.best = false);
    this.quotes.sort((a, b) => b.upvotes - a.upvotes);
    this.quotes[0].best = true;
    this.quotes.sort((a, b) => a.id - b.id);
    console.log(this.quotes)
  }
}
