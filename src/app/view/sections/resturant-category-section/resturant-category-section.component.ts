import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { AccountService } from 'src/app/core/services/user/account.service';
import { ResturantMenuService } from '../services/resturant-menu.service';

@Component({
  selector: 'app-resturant-category-section',
  templateUrl: './resturant-category-section.component.html',
  styleUrls: ['./resturant-category-section.component.scss']
})
export class ResturantCategorySectionComponent implements OnInit {
  getCategories :any;

  constructor(public activeRouter: ActivatedRoute, public _ResturantCardService : ResturantCardService) { }

  ngOnInit(): void {
    // this.getCategories = this._ResturantCardService.getResturantProducts(11, 'fXLu7VeYgXDu82SkMxlLPG1mCAXc4EBIx6O5isgYVIKFQiHah0xiOHmzNsBv').subscribe(res =>{
    //   console.log( 'y',res)
    // })

  }


}
