import { Component, Input, OnInit } from '@angular/core';
import { ReservationList } from '../../models/models/reservationListModel';

@Component({
  selector: 'app-reservations-list-block',
  templateUrl: './reservations-list-block.component.html',
  styleUrls: ['./reservations-list-block.component.scss']
})
export class ReservationsListBlockComponent implements OnInit {

  @Input() reservationList!: ReservationList[];
 
  constructor() { }

  ngOnInit(): void {
  }

}
