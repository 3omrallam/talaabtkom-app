import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantCardService } from 'src/app/core/resturant/resturant-card.service';

@Component({
  selector: 'app-resturants-list-section',
  templateUrl: './resturants-list-section.component.html',
  styleUrls: ['./resturants-list-section.component.scss']
})
export class ResturantsListSectionComponent implements OnInit {

  constructor(public _ResturantCardService: ResturantCardService, public activeRouter: Router) { }

  ngOnInit(): void {
    console.log(this.activeRouter.url);
  }

}
