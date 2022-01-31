import { Component, OnInit, Input } from '@angular/core';
import { ResturantCard } from 'src/app/view/models/models/resturantsList';
@Component({
  selector: 'app-resturant-list-card-block',
  templateUrl: './resturant-list-card-block.component.html',
  styleUrls: ['./resturant-list-card-block.component.scss']
})
export class ResturantListCardBlockComponent implements OnInit {
  
  @Input() listState!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
