import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResturantMenuService } from '../services/resturant-menu.service';

@Component({
  selector: 'app-resturant-category-section',
  templateUrl: './resturant-category-section.component.html',
  styleUrls: ['./resturant-category-section.component.scss']
})
export class ResturantCategorySectionComponent implements OnInit {

  constructor(public activeRouter: Router, public _ResturantMenuService: ResturantMenuService) { }

  ngOnInit(): void {
    console.log(this._ResturantMenuService)
  }

}
