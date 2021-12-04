import { Component, Input, OnInit } from '@angular/core';
import { ResturantCard } from '../resturant-grid-card-block/model/resturant-card';
Input
@Component({
  selector: 'app-resturant-grid-card-block',
  templateUrl: './resturant-grid-card-block.component.html',
  styleUrls: ['./resturant-grid-card-block.component.scss']
})
export class ResturantGridCardBlockComponent implements OnInit {

  @Input()blockState! : ResturantCard;

  constructor() { }

  ngOnInit(): void {
    console.log(this.blockState);
  }

}
