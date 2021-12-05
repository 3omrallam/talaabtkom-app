import { Component, Input, OnInit } from '@angular/core';
import { ResturantMenu } from './model/menuList';

@Component({
  selector: 'app-menu-list-block',
  templateUrl: './menu-list-block.component.html',
  styleUrls: ['./menu-list-block.component.scss']
})
export class MenuListBlockComponent implements OnInit {

  @Input()blockMenu! : ResturantMenu;

  constructor() { }

  ngOnInit(): void {
  }

}
