import { Component, Input, OnInit } from '@angular/core';
import { SingleCard } from 'src/app/core/models/resturantCard';
Input
@Component({
  selector: 'app-resturant-grid-card-block',
  templateUrl: './resturant-grid-card-block.component.html',
  styleUrls: ['./resturant-grid-card-block.component.scss']
})
export class ResturantGridCardBlockComponent implements OnInit {

  @Input() blockState!: SingleCard;
  imageUrl = '';
  iconUrl ='';

  constructor() { }

  ngOnInit(): void {
    // console.log(this.blockState);
    this.mediaCheck();
  }
  // Check Media
  mediaCheck() {
    if (this.blockState?.has_media == false) {
      this.imageUrl = '../assets/images/Newresturant-1.png';
      this.iconUrl = '../assets/images/Newresturant-1.png'
    }
    else if (this.blockState?.has_media == true) {
      this.imageUrl = 'blockState.media[0]?.url';
      this.iconUrl = 'blockState.media[0].icon'
    }
  }

}
