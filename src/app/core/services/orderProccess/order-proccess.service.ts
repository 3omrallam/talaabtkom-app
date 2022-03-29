import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderProccessService {
  allProductsInCart!: any
  orderDetails!: any
  orderDeatilsCart!: any
  orderListData!: any
  orderID!: any
  userAddress!: any
  options: any = []
  deleteStatus: any
  quantityOrder: any = 1
  UserArea: any = "اختر موقعك الحالي"
  userStreet:any = "وإبحث"
  trackingOrderDetails: any
  allOrdersDetails!: any
  userAddressID!: Number
  getUserCartCount!: any
  NotificationList!:any
  countDetails!:any;
  totalPrice:number = 0
  addonesPrice:number = 0

  constructor(private _http: HttpClient) { }

  addProductToCart(apiToken: String, product_id: Number, quantity: number, options:any = []) {
    return this._http.post(`${environment.apiUrl}/api/carts?api_token=${apiToken}&product_id=${product_id}&quantity=${quantity}`, { apiToken, product_id, options, quantity })
  }
  resetNewOrderToCart(api_token: any, product_id: any, quantity: number , reset:number) {
    return this._http.post(`${environment.apiUrl}/api/carts`, { api_token, product_id, quantity, reset})
  }
  reOrderToCart(api_token: any, order_id: any) {
    return this._http.post(`${environment.apiUrl}/api/carts/duplation`, { api_token, order_id})
  }

  getAllProductInCart(apiToken: String) {
    return this._http.get(`${environment.apiUrl}/api/carts?api_token=${apiToken}`)
  }
  deleteItemInCart(productID: number, apiToken: String) {
    return this._http.delete(`${environment.apiUrl}/api/carts/${productID}?api_token=${apiToken}`)
  }
  // getOrderList(apiToken : String){
  //   return this._http.get(`${environment.apiUrl}/api/orders?api_token=${apiToken}`)
  // }
  getOrderDetails(productID: number, apiToken: String) {
    return this._http.get(`${environment.apiUrl}/api/orders/${productID}?api_token=${apiToken}`)
  }
  getUserAddress(apiToken: String) {
    return this._http.get(`${environment.apiUrl}/api/delivery_addresses?api_token=${apiToken}`)
  }
  getCartCount(apiToken: String) {
    return this._http.get(`${environment.apiUrl}/api/carts/count?api_token=${apiToken}`)
  }
  getItemQuantity(productID: number, apiToken: String, quantity: number) {
    return this._http.patch(`${environment.apiUrl}/api/carts/${productID}?api_token=${apiToken}&quantity=${quantity}`, { productID, apiToken, quantity })
  }
  addNewOrder(data: any) {
    return this._http.post(`${environment.apiUrl}/api/orders`, data)
  }
  sendPayment(data: any) {
    return this._http.post(`https://secure.telr.com/gateway/order.json`, data)
  }
  receivePaymentTransaction(data: any) {
    return this._http.post(`https://secure.telr.com/gateway/order.json`, data)
  }
  getMyOrders(apiToken: String) {
    return this._http.get(`${environment.apiUrl}/api/orders?api_token=${apiToken}`)
  }
  sendReview(app: any, api_token: String, order_id: any, market_id: any, rate:any, driver_id: any, driver_rate: any) {
    return this._http.post(`${environment.apiUrl}/api/driver/market_reviews?app=${app}&api_token=${api_token}&order_id=${order_id}&market_id=${market_id}&rate=${rate}&driver_id=${driver_id}&driver_rate=${driver_rate}`
    , {app , api_token , order_id , rate , market_id , driver_id , driver_rate})
  }
  getNotifications(apiToken: any) {
    return this._http.get(`${environment.apiUrl}/api/notifications?api_token=${apiToken}`)
  }
  // Plus And Minus Operations
  Plus() {
    this.quantityOrder++;
  }
  minus() {
    this.quantityOrder--;
    if (this.quantityOrder == 0) {
      this.quantityOrder = 1;
    }
  }


}
