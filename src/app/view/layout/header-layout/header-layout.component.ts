import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SingleCard } from 'src/app/core/models/resturantCard';
import { MapViewService } from 'src/app/core/services/map/map-view.service';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { AccountService } from 'src/app/core/services/user/account.service';
@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss']
})
export class HeaderLayoutComponent implements OnInit { 
  address:any; 
  
  constructor(public activeRouter: Router, public router: ActivatedRoute, public _ResturantCardService: ResturantCardService, public _AccountService: AccountService, public _OrderProccessService: OrderProccessService) { }

  ngOnInit(): void {  
    this.getUserAddress();
  }
  
  getUserAddress(){
    this._OrderProccessService.getUserAddress(this._AccountService.userValue?.data?.token).subscribe((res:any) =>{
      this._OrderProccessService.userAddress = res?.data[0]?.area
    })

  }
  
}
