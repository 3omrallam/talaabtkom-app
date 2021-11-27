import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-selection',
  templateUrl: './filter-selection.component.html',
  styleUrls: ['./filter-selection.component.scss']
})
export class FilterSelectionComponent implements OnInit {

  @Input() items: any
  constructor() { }

  ngOnInit(): void {}

}
