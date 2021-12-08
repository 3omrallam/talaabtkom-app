import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title-block',
  templateUrl: './page-title-block.component.html',
  styleUrls: ['./page-title-block.component.scss']
})
export class PageTitleBlockComponent implements OnInit {

  @Input()title:any;
  @Input()iconTitle:any;

  constructor() { }

  ngOnInit(): void {
  }

}
