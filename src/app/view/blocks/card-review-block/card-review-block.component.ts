import { Component, Input, OnInit } from '@angular/core';
import { reviewsList } from '../../models/reviewsListModal';

@Component({
  selector: 'app-card-review-block',
  templateUrl: './card-review-block.component.html',
  styleUrls: ['./card-review-block.component.scss']
})
export class CardReviewBlockComponent implements OnInit {

  @Input() review!: reviewsList;

  constructor() { }

  ngOnInit(): void {
  }

}
