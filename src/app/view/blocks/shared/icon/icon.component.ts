import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input()textContent:any;
  @Input()iconName:any;
  @Input()iconParagraph:any;
  @Input()textClass:any;
  @Input()paragraphClass:any;
  @Input()iconBg:any;
  constructor() { }

  ngOnInit(): void {
  }

}
