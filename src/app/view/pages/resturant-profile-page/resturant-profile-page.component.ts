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
  getIDFromRoute! : Subscription;
  constructor(public activeRouter: ActivatedRoute, public _ResturantCardService : ResturantCardService) { 
    
  }

  ngOnInit(): void {
    this.getResturantInfoByID()  
  }

  getResturantInfoByID(){
    this.getIDFromRoute = this.activeRouter.params.subscribe(route => {
      this._ResturantCardService.getResturant(`/${route.id}`).subscribe(res => {
        this._ResturantCardService.singleResturantInfo = res?.data
        console.log(this._ResturantCardService.singleResturantInfo);
        
      })
    })
  }
  
  ngOnDestroy(): void {
    this.getIDFromRoute.unsubscribe()
  }
}
