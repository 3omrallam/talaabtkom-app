import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderProccessService {
  allProductsInCart! : any
  orderDetails! : any
  userAddress! : any
  quantityOrder :number =1

  constructor(private _http: HttpClient) { }

  addProductToCart(apiToken : String, productID: Number , quantity:number) { 
    return this._http.post(`${environment.apiUrl}/api/carts?api_token=${apiToken}&product_id=${productID}&quantity=${quantity}`,{apiToken, productID})
  }

  getAllProductInCart(apiToken : String) { 
    return this._http.get(`${environment.apiUrl}/api/carts?api_token=${apiToken}`)
  }
  deleteItemInCart(productID: number, apiToken: String) { 
    return this._http.delete(`${environment.apiUrl}/api/carts/${productID}?api_token=${apiToken}`)
  }
  getOrderDetails(productID: number, apiToken : String){
    return this._http.get(`${environment.apiUrl}/api/orders/${productID}?api_token=${apiToken}`)
  }
  getUserAddress(apiToken : String){
    return this._http.get(`${environment.apiUrl}/api/delivery_addresses?api_token=${apiToken}`)
  }
  getItemQuantity(productID: number, apiToken: String, quantity: number){
    return this._http.patch(`${environment.apiUrl}/api/carts/${productID}`, { apiToken, quantity})
  }
}
