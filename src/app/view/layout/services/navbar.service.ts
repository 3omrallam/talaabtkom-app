import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  cartMenuToggle : Boolean = true;
  searchMenuToggle: Boolean = true;
  loginToggle:boolean = true;
  getUserCartCount! : any

  constructor(private http: HttpClient) { }
  animateCart() {
    this.cartMenuToggle = !this.cartMenuToggle
  }

  getCartCount(apiToken: String){
    return this.http.get(`${environment.apiUrl}/api/carts/count?api_token=${apiToken}`)
  }
}
