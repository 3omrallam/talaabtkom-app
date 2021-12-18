import { Component, Input, OnInit } from '@angular/core';
import { feedbackList } from 'src/app/view/models/models/feedbackListModel';

@Component({
  selector: 'app-feedback-card-block',
  templateUrl: './feedback-card-block.component.html',
  styleUrls: ['./feedback-card-block.component.scss']
})
export class FeedbackCardBlockComponent implements OnInit {

  @Input() userFeedbackList!: feedbackList;
 

  constructor() { }

  ngOnInit(): void {
  }

}
