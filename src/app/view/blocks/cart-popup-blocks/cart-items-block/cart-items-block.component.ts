import { Component, Input, OnInit } from '@angular/core';
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
  constructor(public _AddToCartService: AddToCartService, public _OrderProccessService: OrderProccessService, public _AccountService: AccountService) { }

  ngOnInit(): void {
    console.log(this._OrderProccessService.quantityOrder);
    
    console.log(this.item);
  }
  // Plus Icon In Cart
  Plus() {
    this._OrderProccessService.quantityOrder++;
    console.log(this._OrderProccessService.quantityOrder);

    this.setOrderQuantity();
  }
  // Minus Icon In cart
  minus() {
    this._OrderProccessService.quantityOrder--;
    if (this._OrderProccessService.quantityOrder == 0) {
      this._OrderProccessService.quantityOrder = 1;
    }
    console.log(this._OrderProccessService.quantityOrder);

    this.setOrderQuantity();
  }
  deleteItem(){
    this._OrderProccessService.deleteItemInCart(this.item?.id, this._AccountService.userValue?.data?.token).subscribe(res => {
      console.log(res);
    })
  }
  setOrderQuantity(){
    // let data = {
    //   api_token : this._AccountService.userValue?.data?.token,
    //   quantity: this._OrderProccessService.quantityOrder
    // }
    this._OrderProccessService.getItemQuantity(this.item?.id, this._AccountService.userValue?.data?.token, 6).subscribe((res:any)=>{
      this._OrderProccessService.quantityOrder = res;
    })
  }

}
