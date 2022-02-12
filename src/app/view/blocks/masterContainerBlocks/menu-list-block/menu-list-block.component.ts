import { AccountService } from 'src/app/core/services/user/account.service';
import { Component, Input, OnInit } from '@angular/core';
import { resturantCardBlockList } from 'src/app/core/models/menuListModels/resturantCardBlockModel';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { AddToCartService } from 'src/app/view/sections/services/add-to-cart.service';

@Component({
  selector: 'app-menu-list-block',
  templateUrl: './menu-list-block.component.html',
  styleUrls: ['./menu-list-block.component.scss']
})
export class MenuListBlockComponent implements OnInit {

  @Input() blockMenu: any;
  statusClass = 'not-active';
  imageUrl:any;

  constructor(public _AccountService:AccountService, public _OrderProccessService : OrderProccessService) { }

  ngOnInit(): void {
    // this.mediaCheck();
    console.log(this.blockMenu?.has_media);
    console.log(this.blockMenu?.media[0]?.url);

  }

  handleAddToCard(){
    // this._AddToCartService.sendItem(this.blockMenu);
    this._OrderProccessService.addProductToCart(this._AccountService.userValue?.data?.token, this.blockMenu?.id , 1).subscribe(res => {
      console.log(res);
      
    })
  }

  setActiveClass(){
    this.statusClass = 'active';
  }

  mediaCheck() {
    if (this.blockMenu?.has_media == false) {      
      this.imageUrl = '../../../../../assets/images/placeholder.png';
    }
    else if (this.blockMenu?.has_media == true) {
      this.imageUrl = 'blockMenu.media[0].url';
    }
  }
  

}
