import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { AccountService } from 'src/app/core/services/user/account.service';
import { NavbarService } from '../../layout/services/navbar.service';
import { ResturantMenuService } from '../services/resturant-menu.service';

@Component({
  selector: 'app-resturant-category-section',
  templateUrl: './resturant-category-section.component.html',
  styleUrls: ['./resturant-category-section.component.scss']
})
export class ResturantCategorySectionComponent implements OnInit {
  getCategories :any;
  checkValInInput : any[] = []

  constructor(public activeRouter: ActivatedRoute, public _ResturantCardService: ResturantCardService, 
    public _OrderProccessService: OrderProccessService, public _AccountService: AccountService, public _NavbarService: NavbarService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.getResturantProducts()
    this.getProductsToCart();
    
  }

  getResturantProducts(){
    this._ResturantCardService.getResturantProducts(this._ResturantCardService.resturantID, this._AccountService.userValue.data.token).subscribe((res:any) =>{
      this._ResturantCardService.placeholder = false
    })
  }

  getProductData(id:any) {
    this._ResturantCardService.getProductOptions(id).subscribe((res: any) => {
      this._ResturantCardService.getProductDetails = res
      this._ResturantCardService.placeholder = false
    })
  }

  getProductDetails(product:any){
    this.getProductData(product.id)
  }

  // Add To Cart
  getProductsToCart() {
    this._OrderProccessService.getAllProductInCart(this._AccountService.userValue?.data?.token).subscribe((res: any) => {
      this._OrderProccessService.allProductsInCart = res
    })
  }
  
  getProductsBySearch(e:any) {
    e && this._ResturantCardService.getProductBySearch(e, this._ResturantCardService.resturantID, this._AccountService.userValue?.data?.token).subscribe((res: any) => {
      // this._ResturantCardService.singleResturantCategories = res?.data
      this.checkValInInput = res?.data
      console.log(this.checkValInInput);
    })
  }


}
