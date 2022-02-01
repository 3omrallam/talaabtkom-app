import { Component, OnInit } from '@angular/core';
import { ResturantGridCard } from '../../../core/models/resturantGridCardModel';
import { ResturantGridCardService } from '../services/resturant-grid-card.service';

@Component({
  selector: 'app-resturant-cards-section',
  templateUrl: './resturant-cards-section.component.html',
  styleUrls: ['./resturant-cards-section.component.scss']
})
export class ResturantCardsSectionComponent implements OnInit {

  constructor(public _ResturantGridCardService: ResturantGridCardService) { }

  ngOnInit(): void {
  }

}
