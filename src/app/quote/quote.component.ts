import { Component, OnInit } from '@angular/core';
import { Quote } from '../model/quote';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  quotes : Quote []=[];
  selectedQuote: Quote | undefined;

  constructor(public storageService:StorageService ) {  }

  ngOnInit(): void {
    this.getQuotes()
  }
  getQuotes(){
    this.quotes=[...this.storageService.getQuotes()]
  }
  selectQuote(quote :Quote){
    this.selectedQuote=quote;
  }
  upvoteQuote(quote: Quote){
    this.storageService.upvoteQuote(quote);
    this.getQuotes();
  }
  downVoteQuote(quote :Quote){
    this.storageService.downVotesQuote(quote);
    this.getQuotes();
  }
  deleteQuote(quote :Quote){
    this.storageService.deleteQuote(quote);
    this.selectedQuote= undefined;
    this.getQuotes()
  }

}
