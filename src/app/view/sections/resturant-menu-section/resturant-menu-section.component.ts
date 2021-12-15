import { Component, OnInit } from '@angular/core';
import { ResturantMenuService } from '../services/resturant-menu.service';

@Component({
  selector: 'app-resturant-menu-section',
  templateUrl: './resturant-menu-section.component.html',
  styleUrls: ['./resturant-menu-section.component.scss']
})
export class ResturantMenuSectionComponent implements OnInit {
  
  constructor(public _ResturantMenuService: ResturantMenuService) { }

  ngOnInit(): void {
  }

}
