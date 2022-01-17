import { Component, OnInit } from '@angular/core';
import { ReviewsListService } from '../services/reviews-list.service';

@Component({
  selector: 'app-resturant-reviews-section',
  templateUrl: './resturant-reviews-section.component.html',
  styleUrls: ['./resturant-reviews-section.component.scss']
})
export class ResturantReviewsSectionComponent implements OnInit {

  constructor(public _ReviewsListService: ReviewsListService) { }

  ngOnInit(): void {
  }

}
