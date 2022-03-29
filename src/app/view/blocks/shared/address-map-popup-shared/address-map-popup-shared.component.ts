import { Component, AfterViewInit, ElementRef, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { MapViewService } from 'src/app/core/services/map/map-view.service';
import { MarketService } from 'src/app/core/services/market/market.service';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-address-map-popup-shared',
  templateUrl: './address-map-popup-shared.component.html',
  styleUrls: ['./address-map-popup-shared.component.scss']
})
export class AddressMapPopupSharedComponent implements OnInit, AfterViewInit {
  @ViewChild('myButton') myButton! : ElementRef;
  @ViewChild('reciveMethodBTN') reciveMethodBTN! : ElementRef;
  @ViewChild('parentModel') parentModel! : ElementRef;
  recieve : any = false
  delivery : any = false
  toggleBoolean : Boolean = false

  constructor(public _MapViewService: MapViewService, public _AccountService: AccountService, public _MarketService: MarketService, public _AuthService: AuthService, public translate: TranslateService) { }

  ngOnInit(): void { 
    this.getUserAddress()
  }

  ngAfterViewInit(){
      this.triggerClick()
  }
 
// step 1

  radioValue(e : any, methodVal : any){
    this._MarketService.nearbyProccess = {
      is_default : methodVal
    }
    localStorage.setItem('nearbyMarkets', JSON.stringify(this._MarketService.nearbyProccess))
    
    e.target.checked && this.recieveMethode()
    this.getUserAddress()
  }

  recieveMethode() {
    let el: HTMLElement = this.reciveMethodBTN?.nativeElement as HTMLElement;
    el.click()
    
  }
  // step 2

  getUserAddress(){
    this._MapViewService.getUserLocationOnMap(this._AccountService.userValue?.data?.token).subscribe((res : any) => {
      this._MapViewService.userAddressDetails = res.data[res.data.length-1]
      console.log(this._MapViewService.userAddressDetails);
      console.log(res.data[res.data.length-1]);      
    })
  }

  // step 3

  ngSubmitAddressDetails(form : FormData){
    // this._MapViewService.userLocationInHome = {
    //   api_token : this._AccountService.userValue?.data?.token,
    //   ...this._MapViewService?.userLocationInHome,
    //   ...form
    // }

    this._MarketService.nearbyProccess = {
      api_token : this._AccountService.userValue?.data?.token,
      ...this._MarketService.nearbyProccess,
      ...form
    }
    
    
    this._MapViewService.addUserLocationOnMap(this._MarketService.nearbyProccess).subscribe(res => {
      console.log(res);
      
    })
  }
  
  triggerClick() {
    let el: HTMLElement = this.myButton?.nativeElement as HTMLElement;
    el.click() 
  }
  
}
