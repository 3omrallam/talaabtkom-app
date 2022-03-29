import { AccountService } from 'src/app/core/services/user/account.service';
import { Component, Input, OnInit } from '@angular/core';
import { resturantCardBlockList } from 'src/app/core/models/menuListModels/resturantCardBlockModel';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { AddToCartService } from 'src/app/view/sections/services/add-to-cart.service';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';

@Component({
  selector: 'app-menu-list-block',
  templateUrl: './menu-list-block.component.html',
  styleUrls: ['./menu-list-block.component.scss']
})
export class MenuListBlockComponent implements OnInit {
  @Input() blockMenu: any;
  liked:boolean=false
  likeIcon: any = 'iCC-Newdislike'

  constructor(public _AccountService: AccountService, public _OrderProccessService: OrderProccessService, public _ResturantCardService: ResturantCardService) { }

  ngOnInit(): void {
    this.listFavourite();
    this.getProductData();
    // this.addFavouite();
  }

  addFavouite(){    
    this._ResturantCardService.addProductToFavourite(this.blockMenu?.id, this._AccountService.userValue.data.token).subscribe((res:any) =>{
      console.log(res)
      if (res.message === "Favorite Saved successfully") {
        this.likeIcon = 'iCC-Newlike'
      } else if (res.message === "Deleted successfully"){
        this.likeIcon = 'iCC-Newdislike'
      }
    })
  }
  listFavourite(){
    this._ResturantCardService.getFavourite(this._AccountService.userValue.data.token).subscribe((res:any) =>{
      // console.log(res);     
      for (let i = 0; i < res.data.length; i++) { 
        if (res.data[i].product.id == this.blockMenu?.id) {
          this.likeIcon = 'iCC-Newlike'
        } else {
          this.likeIcon = 'iCC-Newdislike'
        }      
      }    
    })
  }
  getProductData() {
    this._ResturantCardService.getProductOptions(this.blockMenu?.id).subscribe((res:any)=>{
    })
  }

}
