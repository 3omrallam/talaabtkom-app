import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../layout/services/navbar.service';

@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.scss']
})
export class NavbarPageComponent implements OnInit {
  isShow: boolean = false;
  displayOverLay: String = 'd-none'
  constructor(public _NavbarService: NavbarService) { }

  ngOnInit(): void {
  }
  animateNavSearch() {
    this._NavbarService.searchMenuToggle = !this._NavbarService.searchMenuToggle
  }
  animateCart() {
    this._NavbarService.cartMenuToggle = !this._NavbarService.cartMenuToggle
  }
  animateLogin() {
    this._NavbarService.loginToggle = !this._NavbarService.loginToggle;
    switch (this._NavbarService.loginToggle) {
      case false:
        this.displayOverLay = 'd-block'
        document.body.style.overflow = 'hidden';
        break;
      case true:
        setTimeout(() => {
          this.displayOverLay = 'd-none'
          document.body.style.overflow = 'auto';
        }, 400);

        break;
    }
  }
  loginCard(event:any) {
    console.log(event.target.clientHeight);
  }

}
