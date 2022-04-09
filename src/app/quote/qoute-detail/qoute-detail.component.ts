import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/model/quote';

@Component({
  selector: 'app-qoute-detail',
  templateUrl: './qoute-detail.component.html',
  styleUrls: ['./qoute-detail.component.scss']
})
export class QouteDetailComponent implements OnInit {
  qoute: Quote | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
