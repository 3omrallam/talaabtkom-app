import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-menu-layout',
  templateUrl: './side-menu-layout.component.html',
  styleUrls: ['./side-menu-layout.component.scss']
})
export class SideMenuLayoutComponent implements OnInit {

  constructor(public activeRouter: Router) { }

  ngOnInit(): void {
    console.log(this.activeRouter.url);
    
  }

}
