import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-block',
  templateUrl: './button-block.component.html',
  styleUrls: ['./button-block.component.scss']
})
export class ButtonBlockComponent implements OnInit {

  @Input() buttonName:any;
  constructor() { }

  ngOnInit(): void {
  }

}
