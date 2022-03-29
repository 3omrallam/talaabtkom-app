import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SingleCard } from 'src/app/core/models/resturantCard';
Input
@Component({
  selector: 'app-resturant-grid-card-block',
  templateUrl: './resturant-grid-card-block.component.html',
  styleUrls: ['./resturant-grid-card-block.component.scss']
})
export class ResturantGridCardBlockComponent implements OnInit {

  @Input() blockState!: SingleCard;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }
  

}
