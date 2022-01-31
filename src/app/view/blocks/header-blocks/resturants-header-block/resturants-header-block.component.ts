import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resturants-header-block',
  templateUrl: './resturants-header-block.component.html',
  styleUrls: ['./resturants-header-block.component.scss']
})
export class ResturantsHeaderBlockComponent implements OnInit {

  constructor(public activeRouter: Router) { }

  ngOnInit(): void {
  }

}
