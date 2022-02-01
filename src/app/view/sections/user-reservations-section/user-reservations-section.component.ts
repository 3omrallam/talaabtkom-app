import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationList } from 'src/app/core/models/userReservationListModel';
import { ReservationsListService} from '../services/reservations-list.service'

@Component({
  selector: 'app-user-reservations-section',
  templateUrl: './user-reservations-section.component.html',
  styleUrls: ['./user-reservations-section.component.scss']
})
export class UserReservationsSectionComponent implements OnInit {
  reservationsList: ReservationList[] = [];
  btn = "CC-default"
  btn1 = "CC-default";
  btn2 = "CC-default";
  btn3 = "CC-default";
  constructor(public _ReservationsListService: ReservationsListService, public _Router: Router,public activeRouter: Router) { }
  ngOnInit(): void {
    this.allFilter();
    this.defaultStyle()
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
    this.reservationsList = this._ReservationsListService.reservationsList.filter(ele => ele.process == FilterName)
    return this.reservationsList;
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

}
