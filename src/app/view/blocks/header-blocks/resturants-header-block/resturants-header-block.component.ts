import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resturants-header-block',
  templateUrl: './resturants-header-block.component.html',
  styleUrls: ['./resturants-header-block.component.scss']
})
export class ResturantsHeaderBlockComponent implements OnInit {

  @Input()headerTitle!:any;
  @Input()headerIcon!:any;
  

  constructor(public activeRouter: Router, public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
