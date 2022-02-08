import { Component, OnInit } from '@angular/core';
import { MyReviewsListService } from '../services/my-reviews-list.service';

@Component({
  selector: 'app-my-reviews-section',
  templateUrl: './my-reviews-section.component.html',
  styleUrls: ['./my-reviews-section.component.scss']
})
export class MyReviewsSectionComponent implements OnInit {

  constructor(public _MyReviewsListService: MyReviewsListService ) { }

  ngOnInit(): void {
  }

}
