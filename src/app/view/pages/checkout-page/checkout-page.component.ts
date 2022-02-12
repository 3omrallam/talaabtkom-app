import { Component, OnInit } from '@angular/core';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  constructor(public _OrderProccessService : OrderProccessService, public _AccountService : AccountService) { }

  ngOnInit(): void {
    this.getOrderDetails()
    this.getUserAddress()
    this.getUserData()
    console.log(this._OrderProccessService.allProductsInCart);
    
  }

  getOrderDetails(){
    this._OrderProccessService.getOrderDetails(1, this._AccountService?.userValue?.data?.token).subscribe(res => {
      this._OrderProccessService.orderDetails = res
      console.log(res);
      console.log(this._AccountService?.userValue?.data);
    })
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
      console.log(res);
    })
  }

}
