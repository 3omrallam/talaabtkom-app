import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { AccountService } from 'src/app/core/services/user/account.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-checkout-section',
  templateUrl: './checkout-section.component.html',
  styleUrls: ['./checkout-section.component.scss']
})
export class CheckoutSectionComponent implements OnInit {
  @Input() orderDetails : any
  @Input() userAddress : any
  @Input() userdata : any
  @Input() receipt : any
  public paymetURL! : any
  data:any
  constructor(public _OrderProccessService: OrderProccessService,private sanitizer: DomSanitizer, 
    public _AccountService: AccountService, public _ResturantCardService: ResturantCardService, 
    public Router: Router, private location: Location, public translate: TranslateService) { }

  reciveMethodVal : any 
  ngOnInit(): void {
    this.reciveMethodVal = JSON.parse(localStorage.getItem('nearbyMarkets')!);
    console.log(this.reciveMethodVal?.is_default);
    
    this.getUserAddress()
    this.getUserData()
    this.getProductsToCart()
    
  }
 
  getUserAddress(){
    this._OrderProccessService.getUserAddress(this._AccountService?.userValue?.data?.token).subscribe((res:any) => {
      this._OrderProccessService.userAddress = res
      console.log(res.data[0]);
      
    })
  }

  getUserData(){
    this._AccountService.getUserData(this._AccountService?.userValue?.data?.token).subscribe(res => {
      this._AccountService.userData = res
      console.log(res);
      
    })
  }

  getProductsToCart(){
    this._OrderProccessService.getAllProductInCart(this._AccountService.userValue.data.token).subscribe((res:any) => {
      this._OrderProccessService.allProductsInCart = res
    })
  }

  addnewOrders(){
    // When delivery send data with delivery address id [else] don't send data delivery address id
    if (JSON.parse(localStorage.getItem('nearbyMarkets')!).is_default == 1){
       this.data ={
        api_token : this._AccountService.userValue?.data?.token,
        payment_method: "cash",
        // payment_method: this._OrderProccessService.orderDetails?.data?.payment?.method,
        delivery_address_id: this._OrderProccessService.userAddress?.data[0]?.id,
        delivery_fee: this._OrderProccessService.allProductsInCart?.data?.delivery_fee,
        hint: this._OrderProccessService.orderDetails?.data?.hint,
        market_id : this._OrderProccessService.allProductsInCart?.data?.market?.id
      }
    }
    else{
      this.data = {
        api_token: this._AccountService.userValue?.data?.token,
        payment_method: "cash",
        // payment_method: this._OrderProccessService.orderDetails?.data?.payment?.method,
        delivery_fee: 0 ,
        hint: this._OrderProccessService.orderDetails?.data?.hint,
        market_id: this._OrderProccessService.allProductsInCart?.data?.market?.id
      }
    }
    console.log(this.data);
    this._OrderProccessService.addNewOrder(this.data).subscribe((res:any)=>{
      this.getUserOrdersCount()
      this._OrderProccessService.orderID = +res?.data?.id   
      localStorage.setItem('orderID', JSON.stringify(+res?.data?.id ))
    }, ()=> {}, () => this.Router.navigateByUrl(`/track-order`))
  }
  getUserOrdersCount() {
    this._OrderProccessService.getCartCount(this._AccountService?.userValue?.data?.token).subscribe((res: any) => {
      this._OrderProccessService.getUserCartCount = res.data.count
      console.log(this._OrderProccessService.getUserCartCount);

    })
  }

  // x(){
  //    let data = { 
  //     "method": "create",
  //     "store": 26274, 
  //     "authkey": "V4hX~Dp7tF-7CHF4", 
  //     "order": { 
  //       "cartid": Math.random(), 
  //       "test": "1", 
  //       "amount": '100', 
  //       "currency": "SAR",
  //       "description" : 'asdasd' 
  //     },
  //     "return": { 
  //       "authorised": "http://localhost:4200/check-out", 
  //       "declined": "http://www.facebook.com/", 
  //       "cancelled": "http://www.youtube.com/" 
  //     } 
  //   }

  //   this._OrderProccessService.sendPayment(data).subscribe((res : any) => {
  //     console.log(res);
  //     this.paymetURL = res
  //     console.log(this.paymetURL);
      
  //     window.open(this.paymetURL.order?.url, '_blank');
  //     // window.location.replace(this.paymetURL.order?.url);
  //     // this.y()

  //   })
  // }
  
  // y(){
  //   console.log(this.paymetURL?.order?.ref);
    
  //   var data = {
  //     "method": "check",
  //     "ivp_store": 26274, 
  //     "ivp_authkey": "V4hX~Dp7tF-7CHF4", 
  //     "order_ref" : this.paymetURL?.order?.ref
  //   }
  //   this._OrderProccessService.receivePaymentTransaction(data).subscribe((res : any) => {
  //     console.log(res);
      
  //   })
  // }
}
