import { Component, Input, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/view/sections/services/add-to-cart.service';

@Component({
  selector: 'app-cart-items-block',
  templateUrl: './cart-items-block.component.html',
  styleUrls: ['./cart-items-block.component.scss']
})
export class CartItemsBlockComponent implements OnInit {

  @Input() item!: any;
  constructor(public _AddToCartService: AddToCartService) { }

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
  deleteItem(item:any){
    this._AddToCartService.deleteItem(item);
  }

}
