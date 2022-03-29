import { map } from 'rxjs/operators';
import { ResturantCard, SingleCard} from 'src/app/core/models/resturantCard';
import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { AccountService } from 'src/app/core/services/user/account.service';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-resturants-list-section',
  templateUrl: './resturants-list-section.component.html',
  styleUrls: ['./resturants-list-section.component.scss']
})
export class ResturantsListSectionComponent implements OnInit {
  getResturantData$!: Observable<Array<SingleCard>>;
  nearbyMarkets : any
  filterParams : any
   lat:any;
   lng:any;
  action: boolean = true;

  addExtraClass: boolean = false;
 

  constructor(public snackBar: MatSnackBar,public _ResturantCardService: ResturantCardService, private _AccountService: AccountService, public activeRouter: Router, public translate: TranslateService) { }

  ngOnInit(): void {
    
    this.getUserName()
    this.getAllResturants()
  }

  // Get UserName
  getUserName() {
    this.nearbyMarkets = JSON.parse(localStorage.getItem('nearbyMarkets')!);
    // console.log(this.nearbyMarkets);
    
  }

  getAllResturants(searchVal : any = ''){
    // console.log(this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.latitude);
    // console.log(this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.longitude);
    
    
    
    this._ResturantCardService.getNearbyResturant(
      this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.latitude,
      this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.longitude,
      this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.latitude,
      this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.longitude, 
      this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.is_default, searchVal , this._ResturantCardService.fields , this._ResturantCardService.deliveryfree
      , this._ResturantCardService.normal_order_by, this._ResturantCardService.order_by_type, this._ResturantCardService.rate_order_by)
      .subscribe(res => {

      this._ResturantCardService.placeholder = false
      this._ResturantCardService.resturantCards = res
      // console.log(this._ResturantCardService.resturantCards);
    }, (e) => console.log(e))
  }
  
  getResturantBySearch(searchVal : any){
    this.getAllResturants(searchVal)
  }
  open(messasge: string, isClass: any) {

    let config = new MatSnackBarConfig();

    config.verticalPosition = 'bottom';

    config.horizontalPosition = 'right';

    config.duration = true ? 3000 : 0;

    config.panelClass  = [isClass];

    this.snackBar.open(messasge, this.action ? 'X' : undefined, config);

  }



  // getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position: any) => {
  //       if (position) {
  //         console.log("Latitude: " + position.coords.latitude +
  //           "Longitude: " + position.coords.longitude);
  //         this.lat = position.coords.latitude;
  //         this.lng = position.coords.longitude;
  //         console.log(this.lat);
  //         console.log(this.lat);
  //       }
  //     },
  //       (error: any) => console.log(error));
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // }
   
}
