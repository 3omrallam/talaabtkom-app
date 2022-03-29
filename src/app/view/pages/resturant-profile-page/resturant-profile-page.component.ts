import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-resturant-profile-page',
  templateUrl: './resturant-profile-page.component.html',
  styleUrls: ['./resturant-profile-page.component.scss']
})
export class ResturantProfilePageComponent implements OnInit, OnDestroy {
  getIDFromRoute! : Subscription;
  constructor(public activeRouter: ActivatedRoute, public _ResturantCardService: ResturantCardService, public _AccountService: AccountService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.getResturantID()
    this.getResturantProducts()
    this.getResturantInfoByID()  
  }

  getResturantInfoByID(){
      this._ResturantCardService?.getResturant(`/${+this._ResturantCardService.resturantID}`).subscribe(res => {
        this._ResturantCardService.singleResturantInfo = res?.data
        localStorage.setItem('marketName', JSON.stringify(this._ResturantCardService.singleResturantInfo.name))
        // console.log ('x' ,res)
      })
  }

  getResturantID(){
    this.getIDFromRoute = this.activeRouter?.params?.subscribe((route : any) => {
      this._ResturantCardService.resturantID = +route?.id
    })
  }
  
  getResturantProducts(){
      this._ResturantCardService.getResturantProducts(+this._ResturantCardService.resturantID, this._AccountService.userValue?.data?.token).subscribe((res : any) => {
        this._ResturantCardService.singleResturantCategories = res?.data
      })
  }
  scrollTo(section: any) {
    document.querySelector('#' + section)?.scrollIntoView();
  }



  ngOnDestroy(): void {
    this.getIDFromRoute.unsubscribe()
  }
}
