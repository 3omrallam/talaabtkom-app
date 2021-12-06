import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu-navigators',
  templateUrl: './side-menu-navigators.component.html',
  styleUrls: ['./side-menu-navigators.component.scss']
})
export class SideMenuNavigatorsComponent implements OnInit {

  isShow:boolean = false;
 
  @Input()listElements! : any;

  constructor() { }

  ngOnInit(): void {
    
  }
  listDisplay() {
    this.isShow = !this.isShow;
  }
 
}
