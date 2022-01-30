import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-header-block',
  templateUrl: './cover-header-block.component.html',
  styleUrls: ['./cover-header-block.component.scss']
})
export class CoverHeaderBlockComponent implements OnInit {

  @Input()headerImage!:any;
  @Input() headerHeight!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
