import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  cartItems:any[] =[];
  subject = new Subject();
  constructor() { }
  // Send Items To cart
  sendItem(product:any){
    this.subject.next(product);
  }
  // Add Items To cart
  getItem(){
    return this.subject.asObservable();
  }
  deleteAllItems(){
    this.cartItems=[];
  }
  deleteItem(Item:any){
    this.cartItems.map((ele:any, index:any)=>{
      if(Item.id === ele.id){
        this.cartItems.splice(index,1)
      }
    })

  }

}
