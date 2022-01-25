import { Component, Input, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/view/sections/services/add-to-cart.service';

@Component({
  selector: 'app-menu-list-block',
  templateUrl: './menu-list-block.component.html',
  styleUrls: ['./menu-list-block.component.scss']
})
export class MenuListBlockComponent implements OnInit {

  @Input() blockMenu!: any;
  statusClass = 'not-active';

  constructor(public _AddToCartService:AddToCartService) { }

  ngOnInit(): void {
  }
  handleAddToCard(){
    this._AddToCartService.sendItem(this.blockMenu);
  }
  setActiveClass(){
    this.statusClass = 'active';
  }
  

}
