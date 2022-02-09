import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderProccessService {
  allProductsInCart! : any

  constructor(private _http: HttpClient) { }

  addProductToCart(apiToken : String, productID: Number , quantity:number) { 
    return this._http.post(`${environment.apiUrl}/api/carts?api_token=${apiToken}&product_id=${productID}&quantity=${quantity}`,{apiToken, productID})
  }

  getAllProductInCart(apiToken : String) { 
    return this._http.get(`${environment.apiUrl}/api/carts?api_token=${apiToken}`)
  }
  deleteItemInCart(productID: number, apiToken: String) { 
    return this._http.get(`${environment.apiUrl}/api/carts/${productID}?api_token=${apiToken}`)
  }

}
