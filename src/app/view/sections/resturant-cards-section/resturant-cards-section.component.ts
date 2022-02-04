import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SingleCard } from 'src/app/core/models/resturantCard';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';

@Component({
  selector: 'app-resturant-cards-section',
  templateUrl: './resturant-cards-section.component.html',
  styleUrls: ['./resturant-cards-section.component.scss']
})
export class ResturantCardsSectionComponent implements OnInit, OnDestroy {
  getResturantData$!: Observable<Array<SingleCard>>;

  constructor(public _ResturantCardService: ResturantCardService) { }

  ngOnInit(): void {
      this.getAllResturants()
  }

getAllResturants(){
    this._ResturantCardService?.getResturant('?popular=true').subscribe(res => {
      this._ResturantCardService.resturantCards = res
    })
  }

  ngOnDestroy(): void {
    
  }

}
