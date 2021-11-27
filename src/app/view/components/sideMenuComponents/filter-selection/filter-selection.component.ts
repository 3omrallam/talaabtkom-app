import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-selection',
  templateUrl: './filter-selection.component.html',
  styleUrls: ['./filter-selection.component.scss']
})
export class FilterSelectionComponent implements OnInit {
  options:any[] =[];

  constructor() { }

  ngOnInit(): void {
    this.options =[
      {value: 'value1',label:'الكل'},
      {value: 'value2',label:'الشارقي'},
      {value: 'value3',label:'المطبخ الايطالي'},
      {value: 'value4',label:'المكونات'},
      {value: 'value4',label:'البيتزا'},
      {value: 'value4',label:'المشروبات'},
      {value: 'value4',label:'القهوة'},
    ]
    
  }

}
