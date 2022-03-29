import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from 'src/app/core/services/user/account.service';
import { NavbarService } from './services/navbar.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('animateLogin', [
      transition(':enter', [  
        style({top:-718}),
        animate(400, style({top:''})) 
      ]),
      transition(':leave', [   
        animate(400, style({top:-718})) 
      ])
    ]),
    trigger('animateLayer', [
      transition(':enter', [
        style({ opacity: 0.2 }),
        animate(400, style({ opacity: '0.2' }))
      ]),
      transition(':leave', [   
        animate(400, style({ opacity: 0 }))
      ])
    ]),
    trigger('animateCart', [
      transition(':enter', [  
        style({left:-410}),
        animate(400, style({left:''})) 
      ]),
      transition(':leave', [   
        animate(400, style({left:-410})) 
      ])
    ]),
  ]
})
export class LayoutComponent implements OnInit {
  
  displayOverLay: String = 'd-none';
  reactivePopup: any 
  positionDirection: any = localStorage.getItem('currentLang');
  constructor(public activeRouter: Router, public _NavbarService: NavbarService, public _AccountService: AccountService, public translate: TranslateService) { }

  ngOnInit(): void {
    this._AccountService?.userValue?.data?.token && this.getUserAddress()
    this.receivePpoupToggle();
    this.changeLayoutDirection()
  }

  // Get UserName
  getNearbyMarketsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('nearbyMarkets')!);
  }

  receivePpoupToggle(){
    if (this.getNearbyMarketsFromLocalStorage()?.is_default != null && this.getNearbyMarketsFromLocalStorage()?.latitude && this.getNearbyMarketsFromLocalStorage()?.longitude) {
      this.reactivePopup = false
    }else{
      this.reactivePopup = true
    }
  }

  animateLogin() {
    this._NavbarService.loginToggle = !this._NavbarService.loginToggle;
    switch (this._NavbarService.loginToggle) {
      case false:
        this.displayOverLay = 'd-block'
        break;
      case true:
        setTimeout(() => {
          this.displayOverLay = 'd-none'
        }, 400);
        break;
    }
  }

  getUserAddress(){
    this._AccountService.getUserDeliveryAddress(this._AccountService?.userValue?.data?.token).subscribe(res => {
      this._AccountService.getUserAddress = res
    })
  }
  changeLayoutDirection(){
    if (localStorage.getItem('currentLang') == 'en'){
      this.positionDirection == 'left'    
    }else{
      this.positionDirection == 'right'    
    }
  }
  
}
