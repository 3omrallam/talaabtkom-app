import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu-navigators',
  templateUrl: './side-menu-navigators.component.html',
  styleUrls: ['./side-menu-navigators.component.scss']
})
export class SideMenuNavigatorsComponent implements OnInit {

  isShow:boolean = false;
 
  @Input()listElements! : any;

  constructor(public activatedRoute: Router) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log(this.activatedRoute.url)
    // }, 1000);
    console.log(this.listElements);
    
  }
  listDisplay() {
    this.isShow = !this.isShow;
  }
 
}
