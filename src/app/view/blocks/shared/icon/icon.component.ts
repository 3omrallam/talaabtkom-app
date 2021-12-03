import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input()textContent:any;
  @Input()iconName:any;
  @Input()textClass:any;
  constructor() { }

  ngOnInit(): void {
  }

}
