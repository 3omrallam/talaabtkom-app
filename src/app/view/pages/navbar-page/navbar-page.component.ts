import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../layout/services/navbar.service';

@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.scss']
})
export class NavbarPageComponent implements OnInit {
  isShow:boolean = false;

  constructor(public _NavbarService: NavbarService) { }

  ngOnInit(): void {
  }
  animateNavSearch() {
    this._NavbarService.searchMenuToggle = !this._NavbarService.searchMenuToggle
  }

  animateCart(){
    this._NavbarService.cartMenuToggle = !this._NavbarService.cartMenuToggle
  }

}
