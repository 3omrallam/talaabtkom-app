import { Component, Input, OnInit } from '@angular/core';
import { ReservationsListService} from '../services/reservations-list.service'
@Component({
  selector: 'app-user-reservations-section',
  templateUrl: './user-reservations-section.component.html',
  styleUrls: ['./user-reservations-section.component.scss']
})
export class UserReservationsSectionComponent implements OnInit {
  

  constructor(public _ReservationsListService: ReservationsListService) { }

  ngOnInit(): void {
  }

}
