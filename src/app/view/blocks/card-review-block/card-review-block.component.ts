import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { reviewsList } from '../../../core/models/reviewsListModal';

@Component({
  selector: 'app-card-review-block',
  templateUrl: './card-review-block.component.html',
  styleUrls: ['./card-review-block.component.scss']
})
export class CardReviewBlockComponent implements OnInit {

  @Input() review!: reviewsList;

  constructor(public activeRouter: Router) { }

  ngOnInit(): void {
  }

}
