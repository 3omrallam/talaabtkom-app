import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MarketService } from 'src/app/core/services/market/market.service';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { AccountService } from 'src/app/core/services/user/account.service';
import { FilterService } from '../../pages/services/filter.service';
import { UserProfileAsidePageService } from '../../pages/services/user-profile-aside-page.service';
@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss']
})
export class HeaderLayoutComponent implements OnInit {
  address: any;
  reciveMethodVal: any 
  recieveMethod:any;
  constructor(public _MarketService:MarketService, public _UserProfileAsidePageService:UserProfileAsidePageService,
    public activeRouter: Router, public router: ActivatedRoute, public _FilterService: FilterService, 
    public _ResturantCardService: ResturantCardService, public _AccountService: AccountService, 
    public _OrderProccessService: OrderProccessService ,
    public translate: TranslateService) { }

  ngOnInit(): void {
    this._AccountService.userValue?.data?.token && this.getUserArea();
    this.getFilterList()
    this.reciveMethodVal = JSON.parse(localStorage.getItem('nearbyMarkets')!);
    this.recieveMethod = JSON.parse(localStorage.getItem('nearbyMarkets')!);
  }
  // User Area Display In header
  getUserArea() {
    this._OrderProccessService.getUserAddress(this._AccountService.userValue?.data?.token).subscribe((res: any) => {
      this._OrderProccessService.UserArea = res?.data[0]?.area;
    })
  }
  getFilterList() {
    this._MarketService.getMarketFilters().subscribe((res: any) => {
      this._MarketService.filtersName = res.data
      // console.log(this._MarketService.filtersName);
    })
  }

}
