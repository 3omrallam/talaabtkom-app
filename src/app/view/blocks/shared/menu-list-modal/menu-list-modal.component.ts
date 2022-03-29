import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { AccountService } from 'src/app/core/services/user/account.service';
import { NavbarService } from 'src/app/view/layout/services/navbar.service';

@Component({
  selector: 'app-menu-list-modal',
  templateUrl: './menu-list-modal.component.html',
  styleUrls: ['./menu-list-modal.component.scss']
})
export class MenuListModalComponent implements OnInit {
  @ViewChild('myButton') myButton!: ElementRef;
  @Input() list: any;
  @Input() productDetails: any
  getIDFromRoute!: Subscription;
  options: any;
  Addons: any = []
  displayOverLay: any;
  action: boolean = true;
  addExtraClass: boolean = false;
  marketStatus:any
  warningClass:any = 'test'
  ResturantName: any = JSON.parse(localStorage.getItem('marketName')!);

  constructor(public snackBar: MatSnackBar ,public _NavbarService: NavbarService, public activeRouter: ActivatedRoute, public _ResturantCardService: ResturantCardService, public _OrderProccessService: OrderProccessService, public _AccountService: AccountService) { }

  ngOnInit(): void {
    this.getUserOrdersCount()
    this.getResturantStatus()
    // this.getTotalPrice()
  }
  getResturantID() {
    this.getIDFromRoute = this.activeRouter?.params?.subscribe((route: any) => {
      this._ResturantCardService.resturantID = +route?.id
    })
  }

  onSubmit(form: any) {
    // When [unuthorized] when add to cart display Login Popup [[else]] add to Cart
    if (JSON.parse(localStorage.getItem('user')!) == null) {
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
    } else {
      // IF Resturant Available
      if (this.marketStatus == 0){

        for (let key in form) {
          if (typeof (form[key]) != 'boolean') {
            this.Addons.push(form[key].toString())
            console.log(this.Addons);
          }
          console.log(this.Addons);
        }
        this._OrderProccessService.getCartCount(this._AccountService?.userValue?.data?.token).subscribe((res: any) => {
          this._OrderProccessService.getUserCartCount = res.data.count
          this._OrderProccessService.countDetails = res.data
        })
        if (this._OrderProccessService.getUserCartCount == 0) {
          this.handleAddToCard();
        } else if (this._OrderProccessService.getUserCartCount > 0) {
          if (this._OrderProccessService.countDetails.market_id == this._ResturantCardService.getProductDetails.data.market_id) {
            this.handleAddToCard();
          } else {
            this.ReviewClick()
          }
        }
        // If Resturant Closed
      } else if (this.marketStatus == 1){
        let config = new MatSnackBarConfig();

        config.verticalPosition = 'bottom';

        config.horizontalPosition = 'right';

        config.duration = true ? 4000 : 0;

        config.panelClass = ['test'];

        this.snackBar.open('المطعم مغلق لا يمكنك الطلب حاليا', this.action ? '' : undefined, config);

      }else{
        // If Resturant Busy
        let config = new MatSnackBarConfig();

        config.verticalPosition = 'bottom';

        config.horizontalPosition = 'right';

        config.duration = true ? 3000 : 0;

        config.panelClass = ['test'];
        

        this.snackBar.open('المطعم مشغول لا يمكنك الطلب حاليا', this.action ? '' : undefined, config);

      }

    }
  }
  getResturantStatus(){
    this._ResturantCardService.getResturantProfile(this._ResturantCardService.resturantID).subscribe((res:any)=>{
      this.marketStatus = res.data.market_status
    })
  }
  // multipleAddons works 
  multipleAddons$(e: any) {
    if (e.target.checked) {
      this.Addons.push(e.target.value)
      // console.log(e);
      

    } else {
      for (let addon of this.Addons) {
        addon === e.target.value && this.Addons.splice(this.Addons.indexOf(addon), 1)
      }
    }
  }
  totalPrice(e:any){
    console.log(e);
  }

  handleAddToCard() {
    this._OrderProccessService.addProductToCart(this._AccountService.userValue?.data?.token, +this._ResturantCardService.getProductDetails?.data?.id, this._OrderProccessService.quantityOrder, this.Addons).subscribe((res: any) => {
      // console.log('From Handle ADD To Cart', res);
      this.getUserOrdersCount()
      this._OrderProccessService.getItemQuantity(res.data?.id, this._AccountService.userValue?.data?.token, this._OrderProccessService.quantityOrder).subscribe((res: any) => {
        this._OrderProccessService.quantityOrder = res?.data?.quantity;
      })
      // console.log(this._ResturantCardService.getProductDetails);

    })
  }
  // Reset Cart to Add from different Resturant
  resetCart() {
    this._OrderProccessService.resetNewOrderToCart(this._AccountService.userValue?.data?.token, +this._ResturantCardService.getProductDetails?.data?.id, this._OrderProccessService.quantityOrder, 1).subscribe((res: any) => {
      // console.log('From rseset ADD To Cart', res);
      this.getUserOrdersCount()
      this._OrderProccessService.getItemQuantity(res.data?.id, this._AccountService.userValue?.data?.token, this._OrderProccessService.quantityOrder).subscribe((res: any) => {
        this._OrderProccessService.quantityOrder = res?.data?.quantity;
      })
      // console.log(this._ResturantCardService.getProductDetails);

    })
  }
  // Addons
  radioValue(e: any, methodVal: any) {
    this._OrderProccessService.options.push(methodVal)
    // console.log(e);
  }
  getUserOrdersCount() {
    this._OrderProccessService.getCartCount(this._AccountService?.userValue?.data?.token).subscribe((res: any) => {
      this._OrderProccessService.getUserCartCount = res.data.count
      this._OrderProccessService.countDetails = res.data
      // console.log('yy' + this._OrderProccessService.getUserCartCount);
    })
  }

  ReviewClick() {
    let el: HTMLElement = this.myButton?.nativeElement as HTMLElement;
    el.click()
  }

}
