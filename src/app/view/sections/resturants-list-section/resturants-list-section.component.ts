import { map } from 'rxjs/operators';
import { ResturantCard, SingleCard} from 'src/app/core/models/resturantCard';
import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-resturants-list-section',
  templateUrl: './resturants-list-section.component.html',
  styleUrls: ['./resturants-list-section.component.scss']
})
export class ResturantsListSectionComponent implements OnInit {
  getResturantData$!: Observable<Array<SingleCard>>;

  constructor(public _ResturantCardService: ResturantCardService, private _AccountService: AccountService, public activeRouter: Router) { }

  ngOnInit(): void {
    this.getAllResturants()
  }

  getAllResturants(){
    this._ResturantCardService?.getResturant('?popular=true').subscribe(res => {
      this._ResturantCardService.resturantCards = res
    })
  }
   
}
