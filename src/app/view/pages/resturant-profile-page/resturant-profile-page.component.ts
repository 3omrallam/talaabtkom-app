import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { SingleCard } from 'src/app/core/models/resturantCard';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';

@Component({
  selector: 'app-resturant-profile-page',
  templateUrl: './resturant-profile-page.component.html',
  styleUrls: ['./resturant-profile-page.component.scss']
})
export class ResturantProfilePageComponent implements OnInit, OnDestroy {
  getResturantData$!: Observable<Array<SingleCard>>;
  // getResturantData$!: Observable<any>;
  getIDFromRoute! : Subscription;
  constructor(public activeRouter: ActivatedRoute, public _ResturantCardService : ResturantCardService) { 
    
  }

  ngOnInit(): void {
    this.getResturantInfoByID()  
  }

  getResturantInfoByID(){
    this.getIDFromRoute = this.activeRouter.params.subscribe(route => {
      this.getResturantData$ = this._ResturantCardService.getResturantData(`/${route.id}`);
      // this._ResturantCardService.getResturantData(`/${route.id}`).subscribe(res=>{
      //   console.log('x', res)
      // });
    })
  }
  ngOnDestroy(): void {
    this.getIDFromRoute.unsubscribe()
  }
}
