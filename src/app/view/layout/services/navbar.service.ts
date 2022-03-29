import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  cartMenuToggle : Boolean = true;
  sideMenuToggle:Boolean = false;
  searchMenuToggle: Boolean = true;
  loginToggle:boolean = true;
  getUserCartCount! : any

  constructor(private http: HttpClient) { }
  animateCart() {
    this.cartMenuToggle = !this.cartMenuToggle
  }
  animateSideNav() {
    this.sideMenuToggle = !this.sideMenuToggle
  }

  
}
