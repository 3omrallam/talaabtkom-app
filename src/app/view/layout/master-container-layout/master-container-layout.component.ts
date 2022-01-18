import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-master-container-layout',
  templateUrl: './master-container-layout.component.html',
  styleUrls: ['./master-container-layout.component.scss']
})
export class MasterContainerLayoutComponent implements OnInit {
  displayOverLay: String = 'd-none'
  constructor(public _NavbarService:NavbarService) { }

  ngOnInit(): void {
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
