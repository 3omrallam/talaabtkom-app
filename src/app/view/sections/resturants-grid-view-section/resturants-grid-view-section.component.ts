import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
  nearbyMarkets : any

  constructor(public _ResturantCardService: ResturantCardService, public activeRouter: ActivatedRoute, public translate: TranslateService) { }

    ngOnInit(): void {
    // console.log(...this.x);
    
    this.getUserName()
    this.getAllResturants()
  }

  // Get UserName
  getUserName() {
    this.nearbyMarkets = JSON.parse(localStorage.getItem('nearbyMarkets')!);
    console.log(this.nearbyMarkets);
    
  }

  getAllResturants(searchVal : any = ''){
    
    
    this._ResturantCardService.getNearbyResturant(
      this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.latitude, 
      this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.longitude, 
      this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.latitude, 
      this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.longitude, 
      this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.is_default, searchVal, this._ResturantCardService.fields, this._ResturantCardService.deliveryfree,
      this._ResturantCardService.normal_order_by, this._ResturantCardService.order_by_type, this._ResturantCardService.rate_order_by)
      .subscribe(res => {

      this._ResturantCardService.placeholder = false
      this._ResturantCardService.resturantCards = res
      console.log(this._ResturantCardService.resturantCards);
    }, (e) => console.log(e))
  }
  
  getResturantBySearch(searchVal : any){
    this.getAllResturants(searchVal)
  }
  ngOnDestroy(): void {
    
  }
}
