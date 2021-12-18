import { Component, Input, OnInit } from '@angular/core';
import { menuList } from 'src/app/view/models/models/menuListModel';

@Component({
  selector: 'app-menu-list-block',
  templateUrl: './menu-list-block.component.html',
  styleUrls: ['./menu-list-block.component.scss']
})
export class MenuListBlockComponent implements OnInit {

  @Input() blockMenu!: menuList;
  extraList: any = [
  { name: "موتزريلا", cost: "10 ر.س" },
  { name: "شرائح شيدر", cost: "10 ر.س" },
  { name: "كاتشب", cost: "10 ر.س" },
  { name: "طماطم", cost: "10 ر.س" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
