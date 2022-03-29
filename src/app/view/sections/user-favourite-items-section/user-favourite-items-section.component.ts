import { Component, OnInit } from '@angular/core';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-user-favourite-items-section',
  templateUrl: './user-favourite-items-section.component.html',
  styleUrls: ['./user-favourite-items-section.component.scss']
})
export class UserFavouriteItemsSectionComponent implements OnInit {
  liked: boolean = false
  likeIcon: any = 'iCC-Newlike'
  favouriteItems:any

  constructor(public _AccountService: AccountService, public _OrderProccessService: OrderProccessService, public _ResturantCardService: ResturantCardService) { }

  ngOnInit(): void {
    this.getFavouriteList(); 
  }
  getFavouriteList(){
    this._ResturantCardService.getLiseFavourite(this._AccountService.userValue.data.token).subscribe((res:any)=>{
      this.favouriteItems = res.data
      console.log(this.favouriteItems);
      
    })

  }
  addFavouite(id:any) {
    // console.log(id);
    
    this._ResturantCardService.addProductToFavourite(id, this._AccountService.userValue.data.token).subscribe((res: any) => {
      console.log(res)
      this.getFavouriteList()
    })
  }
 
}
