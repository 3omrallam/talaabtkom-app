import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ResturantCard, SingleCard } from 'src/app/core/models/resturantCard';
@Component({
  selector: 'app-resturant-list-card-block',
  templateUrl: './resturant-list-card-block.component.html',
  styleUrls: ['./resturant-list-card-block.component.scss']
})
export class ResturantListCardBlockComponent implements OnInit {
  
  @Input() listState!: SingleCard;
  imageUrl ='';

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    // console.log(this.listState);
    
  }
 

}
