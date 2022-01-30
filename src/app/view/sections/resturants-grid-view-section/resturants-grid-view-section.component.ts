import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantCardService } from 'src/app/core/resturant/resturant-card.service';

@Component({
  selector: 'app-resturants-grid-view-section',
  templateUrl: './resturants-grid-view-section.component.html',
  styleUrls: ['./resturants-grid-view-section.component.scss']
})
export class ResturantsGridViewSectionComponent implements OnInit {

  constructor(public _ResturantCardService: ResturantCardService, public activeRouter: Router) { }

  ngOnInit(): void {
    console.log(this.activeRouter.url);
  }

}
