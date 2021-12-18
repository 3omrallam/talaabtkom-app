import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-popup',
  templateUrl: './add-to-cart-popup.component.html',
  styleUrls: ['./add-to-cart-popup.component.scss']
})
export class AddToCartPopupComponent implements OnInit {

  extraList: any = [
    { name: "موتزريلا", cost: "10 ر.س" },
    { name: "شرائح شيدر", cost: "10 ر.س" },
    { name: "كاتشب", cost: "10 ر.س" },
    { name: "طماطم", cost: "10 ر.س" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
