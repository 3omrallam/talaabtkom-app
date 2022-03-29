import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationList } from 'src/app/core/models/userReservationListModel';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { AccountService } from 'src/app/core/services/user/account.service';
import { ReservationsListService } from 'src/app/view/sections/services/reservations-list.service';

@Component({
  selector: 'app-all-reservations-block',
  templateUrl: './all-reservations-block.component.html',
  styleUrls: ['./all-reservations-block.component.scss']
})
export class AllReservationsBlockComponent implements OnInit {

  @Input() reservationList!: any;
  process:any = '';
  textStyle:any;
  bgStyle:any;
  border:any
  constructor(public router: Router  , public _ReservationsListService: ReservationsListService, public _OrderProccessService: OrderProccessService, public _AccountService: AccountService) { }

  ngOnInit(): void {
    this.getProcess()
    console.log(this.reservationList.order_status_id);
    
  }
  //  
  getProcess(){
     if (this.reservationList.order_status_id == 1 && 3 && 4){
       this.process = 'تحت التنفيذ';
      this.bgStyle= 'cCC-text-opacity-lightblue-20',
      this.textStyle= 'cCC-text-lightyellow',
      this.border= 'uCC-Border-lightyellow'
    }
     else if (this.reservationList.order_status_id == 2){
       this.process = 'تحت التنفيذ';
      this.bgStyle= 'cCC-text-opacity-lightblue-20',
      this.textStyle= 'cCC-text-lightyellow',
      this.border= 'uCC-Border-lightyellow'
    }
    else if (this.reservationList.order_status_id == 5){
      this.process = 'مكتمل';
      this.bgStyle= 'cCC-opacity-green-20',
      this.textStyle= 'cCC-text-lightgreen',
      this.border= 'uCC-Border-green'
    }
    else if (this.reservationList.order_status_id == 6){
      this.process = 'ملغي';
      this.bgStyle= 'cCC-opacity-grey-20',
      this.textStyle= 'cCC-text-support2',
      this.border='uCC-Border-supprt2'
    }
  }
  getTrackingOrder() {
    localStorage.setItem('orderID', JSON.stringify(+this.reservationList.id));
      this.router.navigate(['/track-order']);
      console.log('x',this._OrderProccessService.allOrdersDetails)
  }
  // Rorder TO Cart
  resetCart() {
    this._OrderProccessService.reOrderToCart(this._AccountService.userValue?.data?.token, +this.reservationList.id).subscribe((res: any) => {
      console.log('From REORDER', res);
      this.getUserOrdersCount()

    })
  }
  // Cart Count
  getUserOrdersCount() {
    this._OrderProccessService.getCartCount(this._AccountService?.userValue?.data?.token).subscribe((res: any) => {
      this._OrderProccessService.getUserCartCount = res.data.count
      this._OrderProccessService.countDetails = res.data
      // console.log('yy' + this._OrderProccessService.getUserCartCount);
    })
  }



}
