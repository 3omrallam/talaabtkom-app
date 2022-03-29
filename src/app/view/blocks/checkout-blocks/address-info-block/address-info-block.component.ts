import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-address-info-block',
  templateUrl: './address-info-block.component.html',
  styleUrls: ['./address-info-block.component.scss']
})
export class AddressInfoBlockComponent implements OnInit {
  @Input() userAddress : any

  constructor(public _OrderProccessService: OrderProccessService, public _AccountService: AccountService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.getUserAddress()
  }
  getUserAddress(){
    this._OrderProccessService.getUserAddress(this._AccountService?.userValue?.data?.token).subscribe((res : any) => {
      this._OrderProccessService.userAddress = res
      console.log(res);
      
      this._OrderProccessService.userAddressID = res.data[0]?.id
    })
  }

}
