import { map } from 'rxjs/operators';
import { ResturantCard, SingleCard} from 'src/app/core/models/resturantCard';
import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';

@Component({
  selector: 'app-resturants-list-section',
  templateUrl: './resturants-list-section.component.html',
  styleUrls: ['./resturants-list-section.component.scss']
})
export class ResturantsListSectionComponent implements OnInit {
  getResturantData$!: Observable<Array<SingleCard>>;

  constructor(public _ResturantCardService: ResturantCardService, public activeRouter: Router) { }

  ngOnInit(): void {
      this.getResturantData$ = this._ResturantCardService.getResturantData('?popular=true');
  }
}
