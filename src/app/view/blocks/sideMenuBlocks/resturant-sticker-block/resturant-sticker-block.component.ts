import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resturant-sticker-block',
  templateUrl: './resturant-sticker-block.component.html',
  styleUrls: ['./resturant-sticker-block.component.scss']
})
export class ResturantStickerBlockComponent implements OnInit {

  @Input()resturantInformation! : any

  constructor() { }

  ngOnInit(): void {
  }

}
