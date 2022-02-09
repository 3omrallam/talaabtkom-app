import { Component, OnInit, Input } from '@angular/core';
import { ResturantCard, SingleCard } from 'src/app/core/models/resturantCard';
@Component({
  selector: 'app-resturant-list-card-block',
  templateUrl: './resturant-list-card-block.component.html',
  styleUrls: ['./resturant-list-card-block.component.scss']
})
export class ResturantListCardBlockComponent implements OnInit {
  
  @Input() listState!: SingleCard;
  imageUrl ='';

  constructor() { }

  ngOnInit(): void {
    console.log('nada' , this.listState)
    this.mediaCheck()
  }
  // Check Media
  mediaCheck(){
    if (this.listState?.has_media == false){
      this.imageUrl = '../assets/images/Newresturant-1.png'
    }
    else if (this.listState?.has_media == true){
      this.imageUrl = '{{listState.media[0]?.thumb}}'
    }
  }

}
