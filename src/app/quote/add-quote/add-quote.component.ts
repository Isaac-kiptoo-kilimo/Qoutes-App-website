import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/model/quote';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.scss']
})
export class AddQuoteComponent implements OnInit {

  qoute: Quote= new Quote(1, 'Isaac Kiptoo', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Nigerian',0, 0, new Date());
  title='npms'

  constructor( 
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
