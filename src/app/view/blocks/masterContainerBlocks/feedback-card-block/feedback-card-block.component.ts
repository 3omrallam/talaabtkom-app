import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-card-block',
  templateUrl: './feedback-card-block.component.html',
  styleUrls: ['./feedback-card-block.component.scss']
})
export class FeedbackCardBlockComponent implements OnInit {

  @Input()userFeedbackimg:any;
  @Input()userFeedbackName:any;

  constructor() { }

  ngOnInit(): void {
  }

}
