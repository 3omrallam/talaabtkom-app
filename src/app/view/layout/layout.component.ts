import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('animateLogin', [
      transition(':enter', [  
        style({top:-718}),
        animate(400, style({top:''})) 
      ]),
      transition(':leave', [   
        animate(400, style({top:-718})) 
      ])
    ]),
    trigger('animateLayer', [
      transition(':enter', [
        style({ opacity: 0.2 }),
        animate(400, style({ opacity: '0.2' }))
      ]),
      transition(':leave', [   
        animate(400, style({ opacity: 0 }))
      ])
    ]),
    trigger('animateCart', [
      transition(':enter', [  
        style({left:-410}),
        animate(400, style({left:''})) 
      ]),
      transition(':leave', [   
        animate(400, style({left:-410})) 
      ])
    ])
  ]
})
export class LayoutComponent implements OnInit {
  
  displayOverLay: String = 'd-none';
  constructor(public activeRouter: Router, public _NavbarService: NavbarService, public _AccountService : AccountService) { }

  ngOnInit(): void {}
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
