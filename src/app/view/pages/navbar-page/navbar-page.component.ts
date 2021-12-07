import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.scss']
})
export class NavbarPageComponent implements OnInit {
  isShow:boolean = false;

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
  searchDisplay() {
    this.isShow = !this.isShow;
  }

}
