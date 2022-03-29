import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { ReviewsListService } from '../services/reviews-list.service';

@Component({
  selector: 'app-resturant-reviews-section',
  templateUrl: './resturant-reviews-section.component.html',
  styleUrls: ['./resturant-reviews-section.component.scss']
})
export class ResturantReviewsSectionComponent implements OnInit {
  getIDFromRoute:any;
  resturantRate:any
  rating3: any ;
  constructor(public _ReviewsListService: ReviewsListService, public activeRouter: ActivatedRoute, public _ResturantCardService: ResturantCardService) { }

  ngOnInit(): void {
    this.getResturantRate()
  }
  
  getResturantRate(){
    this._ResturantCardService?.getResturant(`/${+this._ResturantCardService.resturantID}`).subscribe(res => {
      this.resturantRate = res?.data
      console.log(res);
      
      this.rating3 = this.resturantRate.rate
    })
  }
  getResturantID() {
    this.getIDFromRoute = this.activeRouter?.params?.subscribe((route: any) => {
      this._ResturantCardService.resturantID = +route?.id
    })
  }

}
