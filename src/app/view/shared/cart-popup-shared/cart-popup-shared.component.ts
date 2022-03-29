import { AccountService } from 'src/app/core/services/user/account.service';
import { Component, OnInit } from '@angular/core';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { NavbarService } from '../../layout/services/navbar.service';
import { AddToCartService } from '../../sections/services/add-to-cart.service';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Component({
  selector: 'app-cart-popup-shared',
  templateUrl: './cart-popup-shared.component.html',
  styleUrls: ['./cart-popup-shared.component.scss']
})
export class CartPopupSharedComponent implements OnInit {
  // Animation Menu QR code Path
  options: AnimationOptions = {
    path: '../../../../assets/animations/Empty Cart Place Holder.json',
  };

  itemsTotal = 0;
  recieveMethod:any;
  getIDFromRoute:any
  marketStatus:any
  action: boolean = true;
  addExtraClass: boolean = false;
  inOrder:any
  constructor(private router: Router,public snackBar: MatSnackBar,public _ResturantCardService:ResturantCardService,public activeRouter: ActivatedRoute,public _NavbarService: NavbarService, public _OrderProccessService: OrderProccessService, private _AccountService: AccountService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.getProductsToCart()
    this.getResturantStatus()
    this.recieveMethod = JSON.parse(localStorage.getItem('nearbyMarkets')!);
  }
  // Confirm Order Button To Go [CheckOut page]
  closeCart() {    
    // this._NavbarService.cartMenuToggle = !this._NavbarService.cartMenuToggle
    if (this.marketStatus == 0){
      this.router.navigate(['/check-out']);
      this._NavbarService.cartMenuToggle = !this._NavbarService.cartMenuToggle
    } else if (this.marketStatus == 1){
      this._NavbarService.cartMenuToggle = !this._NavbarService.cartMenuToggle
      let config = new MatSnackBarConfig();

      config.verticalPosition = 'bottom';

      config.horizontalPosition = 'right';

      config.duration = true ? 3000 : 0;

      config.panelClass = ['test'];

      this.snackBar.open('المطعم مغلق لا يمكنك الطلب حاليا', this.action ? '' : undefined, config);

    }
    else{
      // If Resturant Busy
      let config = new MatSnackBarConfig();

      config.verticalPosition = 'bottom';

      config.horizontalPosition = 'right';

      config.duration = true ? 3000 : 0;

      config.panelClass = ['test'];


      this.snackBar.open('المطعم مشغول لا يمكنك الطلب حاليا', this.action ? '' : undefined, config);

    }
  }
  // anotherOrderProgress(){
  //   if (this.inOrder == 1){
  //     let config = new MatSnackBarConfig();

  //     config.verticalPosition = 'bottom';

  //     config.horizontalPosition = 'right';

  //     config.duration = true ? 3000 : 0;

  //     config.panelClass = ['test'];


  //     this.snackBar.open('هناك طلب أخر تحت التنفيذ لا يمكنك الطلب', this.action ? '' : undefined, config);
  //   }else{
      

  //   }
  // }
  // Add To Cart
  getProductsToCart(){
    this._OrderProccessService.getAllProductInCart(this._AccountService.userValue?.data?.token).subscribe((res:any) => {
      // console.log("cart",res);
      this.inOrder = res.data.inOrder;
      
      this._OrderProccessService.allProductsInCart = res
      localStorage.setItem('marketIdInTheCart', JSON.stringify(this._OrderProccessService.allProductsInCart?.data?.market?.id));
    })
  }
  animationCreated(animationItem: AnimationItem): void {
  }
  getResturantID() {
    this.getIDFromRoute = this.activeRouter?.params?.subscribe((route: any) => {
      this._ResturantCardService.resturantID = +route?.id
    })
  }
  getResturantStatus() {
    this._ResturantCardService.getResturantProfile(JSON.parse(localStorage.getItem('marketIdInTheCart')!)).subscribe((res: any) => {
      this.marketStatus = res.data.market_status
      // console.log(res);
    })
  }

}
