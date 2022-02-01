import { Component, Input, OnInit } from '@angular/core';
import { ReservationList } from 'src/app/core/models/userReservationListModel';
import { ReservationsListService } from 'src/app/view/sections/services/reservations-list.service';

@Component({
  selector: 'app-all-reservations-block',
  templateUrl: './all-reservations-block.component.html',
  styleUrls: ['./all-reservations-block.component.scss']
})
export class AllReservationsBlockComponent implements OnInit {

  @Input() reservationList!: ReservationList[];
  constructor(public _ReservationsListService: ReservationsListService) { }

  ngOnInit(): void {}

}
