import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  displayOverLay: String = 'd-none'

  constructor(public activeRouter: Router, public _NavbarService: NavbarService) { }

  ngOnInit(): void {
    console.log(this.activeRouter.url);
    
  }
  animateLogin() {
    this._NavbarService.loginToggle = !this._NavbarService.loginToggle;
    switch (this._NavbarService.loginToggle) {
      case false:
        this.displayOverLay = 'd-block'
        break;
      case true:
        setTimeout(() => {
          this.displayOverLay = 'd-none'
        }, 400);
        break;
    }
  }

}
