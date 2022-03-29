import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core/services/language/language.service';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { AccountService } from 'src/app/core/services/user/account.service';
import { NavbarService } from '../../layout/services/navbar.service';
import { AddToCartService } from '../../sections/services/add-to-cart.service';
@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.scss']
})
export class NavbarPageComponent implements OnInit {
  isShow: boolean = false;
  lang: boolean = false ;
  displayOverLay: String = 'd-none'

  constructor(public translate: TranslateService, public _OrderProccessService: OrderProccessService, public _NavbarService: NavbarService, 
    public _AddToCartService: AddToCartService, public _AccountService: AccountService, public _LanguageService: LanguageService) {
    this._LanguageService.currentLang = localStorage.getItem('currentLang');
    this.translate.use(this._LanguageService.currentLang)      
    }
    
  ngOnInit(): void {
    setTimeout(() => {
      console.log(this._OrderProccessService?.getUserCartCount?.data?.count);
    }, 3000);

    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }

  animateNavSearch() {
    this._NavbarService.searchMenuToggle = !this._NavbarService.searchMenuToggle
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
  // To Display In Responsive Only
  isMobile = false;
  getIsMobile(): boolean {
    const w = window.innerWidth;
    const breakpoint = 992;
    if (w < breakpoint) {
      return true;
    } else {
      return false;
    }
  }
  translation(){
    this.lang = !this.lang 
  }
  changeCurrentLang(lang: any) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang)
  }

 
}
