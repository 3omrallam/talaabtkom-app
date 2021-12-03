import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.scss']
})
export class CardBlockComponent implements OnInit {

  @Input()resturantImage:any;
  @Input()resturantLogo:any;
  @Input()resturantName:any;
  @Input()resturantDesc:any;
  constructor() { }

  ngOnInit(): void {
  }

}
