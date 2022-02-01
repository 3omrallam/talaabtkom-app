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
  getResturantData$!: Observable<Array<SingleCard>>;

  constructor(public _ResturantCardService: ResturantCardService, public activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getResturantData$ = this._ResturantCardService.getResturantData('?popular=true');
  }
  ngOnDestroy(): void {
    console.log('Fired');
    
  }
}
