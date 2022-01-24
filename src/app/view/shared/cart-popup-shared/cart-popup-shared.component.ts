import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../layout/services/navbar.service';
import { AddToCartService } from '../../sections/services/add-to-cart.service';

@Component({
  selector: 'app-cart-popup-shared',
  templateUrl: './cart-popup-shared.component.html',
  styleUrls: ['./cart-popup-shared.component.scss']
})
export class CartPopupSharedComponent implements OnInit {

  itemsTotal = 0;
  constructor(public _NavbarService:NavbarService , public _AddToCartService:AddToCartService) { }

  ngOnInit(): void {
    this._AddToCartService.getItem().subscribe((product:any)=>{
      this.addProductToCart(product);
    })
  }
  // Confirm Order Button To Go [CheckOut page]
  closeCart() {
    this._NavbarService.cartMenuToggle = !this._NavbarService.cartMenuToggle
  }
  // Add To Cart
  addProductToCart(product:any){
    let productExist = false;
    // If Product Exist
    for (let i in this._AddToCartService.cartItems) {
      if(this._AddToCartService.cartItems[i].id === product.id){
        this._AddToCartService.cartItems[i].quantity++;
        productExist= true;
        break;
      }
    }
    // If Product Doesn't Exist in the List
    if(!productExist){
      this._AddToCartService.cartItems.push({
        id:product.id,
        image:product.image,
        quantity:1,
        price: product.price,
        description:product.description,
        title:product.title
      })
    }
    this.itemsTotal=0;
    // Calculate Total Items Price
    this._AddToCartService.cartItems.forEach(item => {
    this.itemsTotal += (item.quantity * item.price)
    })
  }
  // Delete Al Items Button
  deleteAllItems(){
    this._AddToCartService.deleteAllItems();
  }

}
