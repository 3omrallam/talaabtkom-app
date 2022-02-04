import { Component, OnInit } from '@angular/core';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { ResturantAsidePageService } from '../services/resturant-aside-page.service';

@Component({
  selector: 'app-resturant-aside-page',
  templateUrl: './resturant-aside-page.component.html',
  styleUrls: ['./resturant-aside-page.component.scss']
})
export class ResturantAsidePageComponent implements OnInit {

  constructor(public _ResturantAsidePageService: ResturantAsidePageService, public _ResturantCardService : ResturantCardService) { }

  ngOnInit(): void {
  }

}
