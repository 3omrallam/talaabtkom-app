import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit, OnDestroy {
  // getIDFromRoute! : Subscription;


  constructor(public _OrderProccessService : OrderProccessService, public _AccountService : AccountService, public activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this._AccountService.userValue?.data?.token && this.getUserAddress()
    this.getUserData()
    this.getProductsToCart()
  }
 
  getUserAddress(){
    this._OrderProccessService.getUserAddress(this._AccountService?.userValue?.data?.token).subscribe(res => {
      this._OrderProccessService.userAddress = res
      console.log(res);
      
    })
  }

  getUserData(){
    this._AccountService.getUserData(this._AccountService?.userValue?.data?.token).subscribe(res => {
      this._AccountService.userData = res
    })
  }

  getProductsToCart(){
    this._OrderProccessService.getAllProductInCart(this._AccountService.userValue.data.token).subscribe((res:any) => {
      this._OrderProccessService.allProductsInCart = res
    })
  }

  ngOnDestroy(): void {
    // this.getIDFromRoute.unsubscribe()
  }

}
