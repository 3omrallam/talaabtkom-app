import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list-modal',
  templateUrl: './menu-list-modal.component.html',
  styleUrls: ['./menu-list-modal.component.scss']
})
export class MenuListModalComponent implements OnInit {
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
