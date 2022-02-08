import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { SingleCard } from 'src/app/core/models/resturantCard';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';

@Component({
  selector: 'app-resturants-grid-view-section',
  templateUrl: './resturants-grid-view-section.component.html',
  styleUrls: ['./resturants-grid-view-section.component.scss']
})
export class ResturantsGridViewSectionComponent implements OnInit, OnDestroy {

  constructor(public _ResturantCardService: ResturantCardService, public activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllResturants()
  }
  getAllResturants(){
    this._ResturantCardService?.getResturant('?popular=true').subscribe(res => {
      this._ResturantCardService.resturantCards = res
    })
  }
  ngOnDestroy(): void {
    console.log('Fired');
    
  }
}
