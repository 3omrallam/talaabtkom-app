import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public activeRouter: Router, public _NavbarService: NavbarService) { }

  ngOnInit(): void {
    console.log(this.activeRouter.url);
    
  }

}
