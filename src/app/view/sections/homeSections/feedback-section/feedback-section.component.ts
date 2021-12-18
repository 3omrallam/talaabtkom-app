import { Component, OnInit } from '@angular/core';
import { FeedbackListService } from '../../services/feedback-list.service';

@Component({
  selector: 'app-feedback-section',
  templateUrl: './feedback-section.component.html',
  styleUrls: ['./feedback-section.component.scss']
})
export class FeedbackSectionComponent implements OnInit {

  constructor(public _FeedbackListService: FeedbackListService) { }

  ngOnInit(): void {
  }

}
