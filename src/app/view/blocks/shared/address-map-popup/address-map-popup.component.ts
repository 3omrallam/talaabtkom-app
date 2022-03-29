import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { MapViewService } from 'src/app/core/services/map/map-view.service';
import { MarketService } from 'src/app/core/services/market/market.service';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-address-map-popup',
  templateUrl: './address-map-popup.component.html',
  styleUrls: ['./address-map-popup.component.scss']
})
export class AddressMapPopupComponent implements OnInit {
  @ViewChild('myButton') myButton!: ElementRef;
  @ViewChild('reciveMethodBTN') reciveMethodBTN!: ElementRef;
  @ViewChild('parentModel') parentModel!: ElementRef;
  recieve: any = false
  delivery: any = false
  toggleBoolean: Boolean = false
  // userCountry: any = this._ResturantCardService.detectLat;
  // userArea: any = this._ResturantCardService.detectLong;

  constructor(public _ResturantCardService: ResturantCardService ,public _OrderProccessService: OrderProccessService ,public _MapViewService: MapViewService, public _AccountService: AccountService, public _MarketService: MarketService, public _AuthService: AuthService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.getUserAddress()
  }
  ngAfterViewInit() {
    // this.triggerClick()
  }

  // step 1

  radioValue(e: any, methodVal: any) {
    this._MarketService.nearbyProccess = {
      is_default: methodVal
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

  getUserAddress() {
    this._MapViewService.getUserLocationOnMap(this._AccountService.userValue?.data?.token).subscribe((res: any) => {
      this._MapViewService.userAddressDetails = res.data[0]
      console.log(this._MapViewService.userAddressDetails);
      
    })
  }

  // step 3
  ngSubmitAddressDetails(form: FormData) {
    console.log(form);
    
    this._MarketService.nearbyProccess = {
      api_token: this._AccountService.userValue?.data?.token,
      ...this._MarketService.nearbyProccess,
      ...form
    }
    this._MapViewService.addUserLocationOnMap(this._MarketService.nearbyProccess).subscribe((res : any) => {
      console.log(res);
      window.location.reload();
    })
  }

  // triggerClick() {
  //   let el: HTMLElement = this.myButton?.nativeElement as HTMLElement;
  //   el.click()
  // }
  

}
