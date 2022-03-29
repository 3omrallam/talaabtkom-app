import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-notifications-section',
  templateUrl: './notifications-section.component.html',
  styleUrls: ['./notifications-section.component.scss']
})
export class NotificationsSectionComponent implements OnInit {

  constructor(public _OrderProccessService: OrderProccessService, public _AccountService: AccountService, public _ResturantCardService: ResturantCardService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.myNotifications()
  }
  myNotifications(){
    this._OrderProccessService.getNotifications(this._AccountService.userValue?.data.token).subscribe((res:any) =>{
      this._ResturantCardService.placeholder = false
      this._OrderProccessService.NotificationList = res.data
      console.log(res);
      
    })
  }

}
