import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resturant-profile-page',
  templateUrl: './resturant-profile-page.component.html',
  styleUrls: ['./resturant-profile-page.component.scss']
})
export class ResturantProfilePageComponent implements OnInit {

  constructor(public activeRouter: Router) { }

  ngOnInit(): void {
    console.log(this.activeRouter.url);
  }

}
