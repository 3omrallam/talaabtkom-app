import { ResturantCard } from './../resturant-grid-card-block/model/resturant-card';
import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-resturant-list-card-block',
  templateUrl: './resturant-list-card-block.component.html',
  styleUrls: ['./resturant-list-card-block.component.scss']
})
export class ResturantListCardBlockComponent implements OnInit {
  
  @Input()listState! : any;

  constructor() { }

  ngOnInit(): void {
  }

}
