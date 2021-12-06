import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-information-page',
  templateUrl: './menu-information-page.component.html',
  styleUrls: ['./menu-information-page.component.scss']
})
export class MenuInformationPageComponent implements OnInit {

  constructor(public activeRouter: Router) { }

  ngOnInit(): void {
    console.log(this.activeRouter.url);
  }

}
