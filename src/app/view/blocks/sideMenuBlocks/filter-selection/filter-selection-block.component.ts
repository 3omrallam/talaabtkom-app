import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-selection-block',
  templateUrl: './filter-selection-block.component.html',
  styleUrls: ['./filter-selection-block.component.scss']
})
export class FilterSelectionBlockComponent implements OnInit {

  @Input() items: any
  constructor() { }

  ngOnInit(): void {}

}
