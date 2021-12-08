import { Component, OnInit } from '@angular/core';
import { ResturantCardService } from 'src/app/core/resturant/resturant-card.service';

@Component({
  selector: 'app-resturants-list-page',
  templateUrl: './resturants-list-page.component.html',
  styleUrls: ['./resturants-list-page.component.scss']
})
export class ResturantsListPageComponent implements OnInit {

  constructor(public _ResturantCardService: ResturantCardService) { }

  ngOnInit(): void {
  }

}
