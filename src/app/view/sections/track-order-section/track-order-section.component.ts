import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapViewService } from 'src/app/core/services/map/map-view.service';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { AccountService } from 'src/app/core/services/user/account.service';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-order-section',
  templateUrl: './track-order-section.component.html',
  styleUrls: ['./track-order-section.component.scss']
})
export class TrackOrderSectionComponent implements OnInit {
  @ViewChild('myButton') myButton! : ElementRef;
  recieveMethod:any;
  ratingApp:number = 0;
  ratingService:number = 0
  ratingDriver:number = 0
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.primary;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
  ResturantName: any = JSON.parse(localStorage.getItem('marketName')!);
  options: AnimationOptions = {
    path: '../../../../assets/animations/Food Prepared - Food app.json',
  };
  clock: AnimationOptions = {
    path: '../../../../assets/animations/Stopwatch via  Sketch2AE.json',
  };
  recieved: AnimationOptions = {
    path: '../../../../assets/animations/66688-verified.json',
  };
  onTheWay: AnimationOptions = {
    path: '../../../../assets/animations/56869-your-orders-are-on-the-way.json',
  };

  constructor(private router: Router ,public _ResturantCardService:ResturantCardService ,public _OrderProccessService: OrderProccessService,public _AccountService: AccountService, public _MapViewService : MapViewService) { }

  ngOnInit(): void {
    
    this.ResturantName;
    this.recieveMethod = JSON.parse(localStorage.getItem('nearbyMarkets')!);
    this.getOrderDetails();
    
  }
  // Get Order Details
  getOrderDetails() {
    let orderID = JSON.parse(localStorage.getItem('orderID')!);
    this._OrderProccessService.getOrderDetails(orderID , this._AccountService?.userValue?.data?.token).subscribe((res:any) => {
      this._OrderProccessService.orderDeatilsCart = res,
      // this.getResturantName();
      console.log(this._OrderProccessService.orderDeatilsCart);
      // Review popup Display
      if(this._OrderProccessService.trackingOrderDetails?.data?.order_status_id == 5){
        this.ReviewClick()
      }
    })
   
  }
  submitReview(){
    let orderID = JSON.parse(localStorage.getItem('orderID')!);
    this._OrderProccessService.sendReview(this.ratingApp ,this._AccountService?.userValue?.data?.token,  orderID , 
      this._OrderProccessService.orderDeatilsCart?.data?.market_id, this.ratingService , this._OrderProccessService.orderDeatilsCart?.data?.driver_id
      ,this.ratingDriver).subscribe(res=>{
        console.log(res);

        
      })
      this.router.navigate(['/']);
  }
  animationCreated(animationItem: AnimationItem): void {
  }
  onRatingChanged(rating:any){
    console.log(rating);
    this.ratingApp = rating;
  }
  onRatingseerviceChanged(rating:any){
    console.log(rating);
    this.ratingService = rating;
  }
  onRatingDriverChanged(rating:any){
    console.log(rating);
    this.ratingDriver = rating;
  }
  ReviewClick() {
    let el: HTMLElement = this.myButton?.nativeElement as HTMLElement;
    el.click() 
  }
 

}
export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}