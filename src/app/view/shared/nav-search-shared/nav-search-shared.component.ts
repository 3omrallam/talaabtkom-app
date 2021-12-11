import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-search-shared',
  templateUrl: './nav-search-shared.component.html',
  styleUrls: ['./nav-search-shared.component.scss']
})
export class NavSearchSharedComponent implements OnInit {
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
