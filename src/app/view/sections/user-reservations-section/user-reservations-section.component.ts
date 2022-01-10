import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationList } from '../../models/models/reservationListModel';
import { ReservationsListService} from '../services/reservations-list.service'

@Component({
  selector: 'app-user-reservations-section',
  templateUrl: './user-reservations-section.component.html',
  styleUrls: ['./user-reservations-section.component.scss']
})
export class UserReservationsSectionComponent implements OnInit {
  reservationsList: ReservationList[] = [];
 

  constructor(public _ReservationsListService: ReservationsListService, public _Router: Router) { }

  ngOnInit(): void {
    this.allFilter();
  }


  // Reservations Filteration
  allFilter(){
    this.reservationsList = this._ReservationsListService.reservationsList;
  }
  Filter(FilterName:any){
    this.reservationsList = this._ReservationsListService.reservationsList.filter(ele => ele.process == FilterName)
    return this.reservationsList;
  }

}
