import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { AccountService } from 'src/app/core/services/user/account.service';
import { AddToCartService } from 'src/app/view/sections/services/add-to-cart.service';

@Component({
  selector: 'app-cart-items-block',
  templateUrl: './cart-items-block.component.html',
  styleUrls: ['./cart-items-block.component.scss']
})
export class CartItemsBlockComponent implements OnInit {

  @Input() item!: any;
  totalPrice:number = 0
  constructor(public activeRouter:Router 
    ,public _AddToCartService: AddToCartService, public _OrderProccessService: OrderProccessService, 
    public _AccountService: AccountService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.getUserOrdersCount();
   
   
  }
  // Plus Icon In Cart
  Plus() {
    this.item.quantity++;
    this.setOrderQuantity();
    this.getProductsToCart();
  }
  // Minus Icon In cart
  minus() {
    this.item.quantity--;
    if (this.item.quantity == 0) {
      this.item.quantity = 1;
    }
    this.setOrderQuantity();
    this.getProductsToCart()
  }
  deleteItem(){
    this._OrderProccessService.deleteItemInCart(this.item?.id, this._AccountService.userValue?.data?.token).subscribe((res : any) => {
      this._OrderProccessService.deleteStatus = res.data
      if(res.success == true){
        this.getProductsToCart();
        this.getUserOrdersCount()
      }
    })
  }
  setOrderQuantity(){
    this._OrderProccessService.getItemQuantity(this.item?.id, this._AccountService.userValue?.data?.token, this.item.quantity).subscribe((res:any)=>{
      this.item.quantity = res.data.quantity;
      this._OrderProccessService.allProductsInCart?.data?.sub_total
    })
  }
  // TODO Redundant function
  getProductsToCart() {
    this._OrderProccessService.getAllProductInCart(this._AccountService.userValue?.data?.token).subscribe((res: any) => {
      this._OrderProccessService.allProductsInCart = res
      
    })
  }
  // TODO Redundant function
  getUserOrdersCount() {
    this._OrderProccessService.getCartCount(this._AccountService?.userValue?.data?.token).subscribe((res: any) => {
      this._OrderProccessService.getUserCartCount = res.data.count
      console.log(this._OrderProccessService.getUserCartCount);
      
    })
  }



}
