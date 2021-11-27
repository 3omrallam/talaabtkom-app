import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/view/pages/services/filter.service';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss']
})
export class FilterPageComponent implements OnInit {

  constructor(public _FilterService: FilterService) { }

  ngOnInit(): void {
  }

}
