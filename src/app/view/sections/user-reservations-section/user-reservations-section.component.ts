import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ReservationList } from 'src/app/core/models/userReservationListModel';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { AccountService } from 'src/app/core/services/user/account.service';
import { ReservationsListService} from '../services/reservations-list.service'

@Component({
  selector: 'app-user-reservations-section',
  templateUrl: './user-reservations-section.component.html',
  styleUrls: ['./user-reservations-section.component.scss']
})
export class UserReservationsSectionComponent implements OnInit {
  reservationsList: ReservationList[] = [];
  current!:any
  completed!:any
  canceled!:any
  btn = "CC-default"
  btn1 = "CC-default";
  btn2 = "CC-default";
  btn3 = "CC-default";
  constructor(public router: Router , public _ReservationsListService: ReservationsListService, 
    public _AccountService: AccountService, public _Router: Router, public activeRouter: Router, 
    public _OrderProccessService: OrderProccessService, public translate: TranslateService) { }
  ngOnInit(): void {
    this.allFilter();
    this.defaultStyle()
    this.getAllOrders();
  } 
  // All Reservations 
  allFilter(){
    this.reservationsList = this._ReservationsListService.reservationsList;
    this.btn = "CC-active"
    this.btn1 = "CC-default";
    this.btn2 = "CC-default";
    this.btn3 = "CC-default";
  }
  // Reservations Filteration
  Filter(FilterName:any){
    console.log(FilterName);
    
    this._OrderProccessService.getMyOrders(this._AccountService.userValue?.data?.token).subscribe((res: any) => {
      console.log(res.data)
      this._OrderProccessService.allOrdersDetails = res.data.filter((x: any) => { return x.order_status_id == FilterName})
      console.log(this._OrderProccessService.allOrdersDetails);
      
      // if (res.data.order_status_id == FilterName)
      // {
      //   this.canceled = res.data.order_status_id
      //   console.log(this.canceled);
        
      // }
      // this._OrderProccessService.allOrdersDetails = res.data.order_status_id.filter((ele:any) => ele.process == FilterName)
      // return this._OrderProccessService.allOrdersDetails;
    }
    )
  }
  // Styling
  defaultStyle(){
    this.btn = "CC-active"
    this.btn1 = "CC-default";
    this.btn2 = "CC-default";
    this.btn3 = "CC-default";
  }
  div1Function() {
    this.btn = "CC-default"
    this.btn1 = "CC-active";
    this.btn2 = "CC-default";
    this.btn3 = "CC-default";
  }
  div2Function() {
    this.btn = "CC-default"
    this.btn1 = "CC-default";
    this.btn2 = "CC-active";
    this.btn3 = "CC-default";
  }
  div3Function() {
    this.btn = "CC-default"
    this.btn1 = "CC-default";
    this.btn2 = "CC-default";
    this.btn3 = "CC-active";
  }
  getAllOrders(){
    this._OrderProccessService.getMyOrders(this._AccountService.userValue?.data?.token).subscribe((res:any) =>{
      this._OrderProccessService.allOrdersDetails = res.data
      // localStorage.setItem('orderID', JSON.stringify(+res?.data?.id));
      // this.router.navigate(['/track-order']);
      console.log("xxx" , this._OrderProccessService.allOrdersDetails)
    })
  }

}
