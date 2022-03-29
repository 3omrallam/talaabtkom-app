import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapViewService } from 'src/app/core/services/map/map-view.service';
import { MarketService } from 'src/app/core/services/market/market.service';
import { AccountService } from 'src/app/core/services/user/account.service';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-check-out-popup-shared',
  templateUrl: './check-out-popup-shared.component.html',
  styleUrls: ['./check-out-popup-shared.component.scss']
})
export class CheckOutPopupSharedComponent implements OnInit {

  @ViewChild('reciveMethodBTN') reciveMethodBTN! : ElementRef;

  
  constructor(public _MapViewService : MapViewService, 
    public _AccountService: AccountService, 
    public _MarketService: MarketService, 
    private router : Router,
    public _OrderProccessService: OrderProccessService,
    public translate: TranslateService,
    public _AuthService: AuthService) { }

  ngOnInit(): void {
    // this.getUserAddress()
    this.getUserData()
  }

  // getUserAddress(){
  //   this._MapViewService.getUserLocationOnMap(this._AccountService.userValue?.data?.token).subscribe((res : any) => {
  //     this._MapViewService.userAddressDetails = res.data[0]
  //     console.log(this._MapViewService.userAddressDetails);
      
  //   })
  // }
  getUserData() {
    this._AccountService.getUserData(this._AccountService?.userValue?.data?.token).subscribe((res:any) => {
      this._AccountService.userId = res.data.id
      console.log(this._AccountService.userId);
      
    })
  }

  ngSubmitAddressDetails(form : FormData){
    console.log(form);
    
    let receiveMethod = JSON.parse(localStorage.getItem('nearbyMarkets')!)?.is_default
    // localStorage.setItem('nearbyMarkets', JSON.stringify(this._MarketService?.nearbyProccess))
    this._MarketService.nearbyProccess = {
      api_token : this._AccountService.userValue?.data?.token,
      is_default : receiveMethod,
      ...this._MarketService.nearbyProccess,
      user_id: this._AccountService.userId,
      ...form
    }
    console.log(this._MarketService.nearbyProccess);
    console.log(this._OrderProccessService?.userAddressID);
    
    
    
    this._MapViewService.updateUserLocationOnMap(this._OrderProccessService?.userAddressID,this._MarketService.nearbyProccess).subscribe(res => {
      this.reloadCurrentPage()
    })
    
  }

  radioValue(e : any, methodVal : any){
    this._MarketService.nearbyProccess = {
      is_default : methodVal
    }
    e.target.checked && this.recieveMethode()
  }

  reloadCurrentPage() {
    window.location.reload();
   }

   recieveMethode() {
    let el: HTMLElement = this.reciveMethodBTN?.nativeElement as HTMLElement;
    el.click()
    
  }
}
