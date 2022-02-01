import { Component, OnInit, Input } from '@angular/core';
import { SingleCard } from 'src/app/core/models/resturantCard';
@Component({
  selector: 'app-resturant-list-card-block',
  templateUrl: './resturant-list-card-block.component.html',
  styleUrls: ['./resturant-list-card-block.component.scss']
})
export class ResturantListCardBlockComponent implements OnInit {
  
  @Input() listState!: SingleCard;

  constructor() { }

  ngOnInit(): void {}

}
