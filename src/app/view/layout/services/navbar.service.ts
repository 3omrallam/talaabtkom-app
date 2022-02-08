import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  cartMenuToggle : Boolean = true;
  searchMenuToggle: Boolean = true;
  loginToggle:boolean = true;

  constructor() { }
  animateCart() {
    this.cartMenuToggle = !this.cartMenuToggle
  }
}
