import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-aside-page',
  templateUrl: './aside-page.component.html',
  styleUrls: ['./aside-page.component.scss']
})
export class AsidePageComponent implements OnInit {

  constructor(public _FilterService: FilterService) { }

  ngOnInit(): void {
  }

}
