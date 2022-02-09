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
  }
  // Plus Icon In Cart
  Plus(item: any) {
    return item.quantity++;
  }
  // Minus Icon In cart
  minus(item: any) {
    item.quantity--;
    if (item.quantity == 0) {
      item.quantity = 1
    }
  }
  deleteItem(){
    this._OrderProccessService.deleteItemInCart(this.item?.id, this._AccountService.userValue?.data?.token).subscribe(res => {
      console.log(res);
    })
    // this._AddToCartService.deleteItem(item);
  }

}
