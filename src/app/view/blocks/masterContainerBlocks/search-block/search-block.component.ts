import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['./search-block.component.scss']
})
export class SearchBlockComponent implements OnInit {
  countries: any = [
    { value: 'value1', name: 'الرياض' },
    { value: 'value2', name: 'جده' },
    { value: 'value3', name: 'الدمام' },
    { value: 'value4', name: 'الطائف' },
    { value: 'value5', name: 'مكه' },
    { value: 'value6', name: 'تبوك' },
    { value: 'value7', name: 'الخبر' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
