import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/internal/Observable';
import { SingleCard } from 'src/app/core/models/resturantCard';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';

@Component({
  selector: 'app-resturant-cards-section',
  templateUrl: './resturant-cards-section.component.html',
  styleUrls: ['./resturant-cards-section.component.scss']
})
export class ResturantCardsSectionComponent implements OnInit, OnDestroy {
  getResturantData$!: Observable<Array<SingleCard>>;
  nearbyMarkets : any


  constructor(public _ResturantCardService: ResturantCardService, public translate: TranslateService) { }

  ngOnInit(): void {
      this.getAllResturants()
  }

getAllResturants(){
    this._ResturantCardService?.getResturant('?popular=true').subscribe(res => {
      this._ResturantCardService.placeholder = false
      this._ResturantCardService.resturantCards = res
    })
  }
    // Get UserName
  getUserName() {
    this.nearbyMarkets = JSON.parse(localStorage.getItem('nearbyMarkets')!);
    console.log(this.nearbyMarkets);
    
  }

  // getAllResturants(searchVal : any = ''){
    
    
  //   this._ResturantCardService.getNearbyResturant(
  //     this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.latitude, 
  //     this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.longitude, 
  //     this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.is_default, searchVal)
  //     .subscribe(res => {

  //     this._ResturantCardService.placeholder = false
  //     this._ResturantCardService.resturantCards = res
  //     console.log(this._ResturantCardService.resturantCards);
  //   }, (e) => console.log(e))
  // }

  // getResturantBySearch(searchVal : any){
  //   this.getAllResturants(searchVal)
  // }
   
  ngOnDestroy(): void {
    
  }

}
