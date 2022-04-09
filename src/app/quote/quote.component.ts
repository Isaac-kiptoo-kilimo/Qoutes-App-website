import { Component, OnInit } from '@angular/core';
import { Quote } from '../model/quote';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  qoutes : Quote []=[];
  selectedQuote: Quote | undefined;

  constructor(public storageService:StorageService ) {  }

  ngOnInit(): void {
    this.getQuotes()
  }
  getQuotes(){
    this.qoutes=[...this.storageService.getQoutes()]
  }

}
