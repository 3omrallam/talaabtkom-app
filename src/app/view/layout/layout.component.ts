import { animate, state, style, transition, trigger } from '@angular/animations';
import { ThrowStmt } from '@angular/compiler';
import { Component, Directive, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('animateLogin', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({top:-718}),
        animate(400, style({top:''})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(400, style({top:-718})) 
      ])
    ]),
    trigger('animateCart', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({left:-410}),
        animate(400, style({left:''})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(400, style({left:-410})) 
      ])
    ])
  ]
  
})
export class LayoutComponent implements OnInit {
  
  displayOverLay: String = 'd-none';

  constructor(public activeRouter: Router, public _NavbarService: NavbarService, public _AccountService : AccountService) { }

  ngOnInit(): void {
    
   
  }

  
  animateLogin() {
    this._NavbarService.loginToggle = !this._NavbarService.loginToggle;
    switch (this._NavbarService.loginToggle) {
      case false:
        this.displayOverLay = 'd-flex'
        break;
      case true:
        setTimeout(() => {
          this.displayOverLay = 'd-none'
        }, 400);
        break;
    }
  }
  


}
