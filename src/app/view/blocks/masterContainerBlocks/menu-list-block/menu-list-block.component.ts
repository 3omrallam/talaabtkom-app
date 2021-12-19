import { Component, Input, OnInit } from '@angular/core';
import { menuList } from 'src/app/view/models/models/menuListModel';

@Component({
  selector: 'app-menu-list-block',
  templateUrl: './menu-list-block.component.html',
  styleUrls: ['./menu-list-block.component.scss']
})
export class MenuListBlockComponent implements OnInit {

  @Input() blockMenu!: menuList;

  constructor() { }

  ngOnInit(): void {
  }
  

}
