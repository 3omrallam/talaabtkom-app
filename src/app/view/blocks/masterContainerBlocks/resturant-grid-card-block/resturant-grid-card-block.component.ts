import { Component, Input, OnInit } from '@angular/core';
import { ResturantGridCard } from 'src/app/view/models/models/resturantGridCardModel';
Input
@Component({
  selector: 'app-resturant-grid-card-block',
  templateUrl: './resturant-grid-card-block.component.html',
  styleUrls: ['./resturant-grid-card-block.component.scss']
})
export class ResturantGridCardBlockComponent implements OnInit {

  @Input() blockState!: ResturantGridCard;

  constructor() { }

  ngOnInit(): void {
    
  }

}
