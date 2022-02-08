import { Component, OnInit } from '@angular/core';
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

  displayOverLay: String = 'd-none'
  constructor(public _NavbarService: NavbarService , public _AddToCartService:AddToCartService, public _AccountService: AccountService) { }
  ngOnInit(): void {
    console.log(this._AccountService.userValue?.success);
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };

    this._AccountService?.userValue?.data?.token && this.getUserOrdersCount()
  }

  getUserOrdersCount(){
    this._NavbarService.getCartCount(this._AccountService?.userValue?.data?.token).subscribe(res => {
      this._NavbarService.getUserCartCount = res
    })
  }

  animateNavSearch() {
    this._NavbarService.searchMenuToggle = !this._NavbarService.searchMenuToggle
  }
  animateLogin() {
    this._NavbarService.loginToggle = !this._NavbarService.loginToggle;
    console.log(this._NavbarService.loginToggle);
    
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

}
