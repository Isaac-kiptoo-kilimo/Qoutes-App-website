import { Component, OnInit } from '@angular/core';
import { Quote } from '../model/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] =  [
    new Quote(1, 'Isaac Kiptoo', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Nigerian',0, 0, new Date()),
    new Quote(2, 'Isaac Kiptanui', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Kenyan',0, 0, new Date()),
    new Quote(3, 'Isaac Kiptoo', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Zambian',0, 0, new Date()),
    new Quote(4, 'Isaac Kiptoo', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Rwandis',0, 0, new Date())
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
