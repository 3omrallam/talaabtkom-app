import { Component, OnInit } from '@angular/core';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { AccountService } from 'src/app/core/services/user/account.service';
import { NavbarService } from '../../layout/services/navbar.service';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cart-mobile-responsive-section',
  templateUrl: './cart-mobile-responsive-section.component.html',
  styleUrls: ['./cart-mobile-responsive-section.component.scss']
})
export class CartMobileResponsiveSectionComponent implements OnInit {

  // Animation Menu QR code Path
  options: AnimationOptions = {
    path: '../../../../assets/animations/Empty Cart Place Holder.json',
  };

  constructor(public _OrderProccessService: OrderProccessService, public _NavbarService: NavbarService, public _AccountService: AccountService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.getProductsToCart()
  }
  // Add To Cart
  getProductsToCart() {
    this._OrderProccessService.getAllProductInCart(this._AccountService.userValue?.data?.token).subscribe((res: any) => {
      this._OrderProccessService.allProductsInCart = res
    })
  }
  animationCreated(animationItem: AnimationItem): void {
  }
}
