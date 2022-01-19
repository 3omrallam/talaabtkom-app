import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../layout/services/navbar.service';

@Component({
  selector: 'app-cart-popup-shared',
  templateUrl: './cart-popup-shared.component.html',
  styleUrls: ['./cart-popup-shared.component.scss']
})
export class CartPopupSharedComponent implements OnInit {
  constructor(public _NavbarService:NavbarService) { }

  ngOnInit(): void {
  }
  closeCart() {
    this._NavbarService.cartMenuToggle = !this._NavbarService.cartMenuToggle
  }

}
