import { Component, Input, OnInit } from '@angular/core';
import { ResturantCardService } from 'src/app/core/resturant/resturant-card.service';
import { ResturantCard } from 'src/app/view/models/models/resturantsList';

@Component({
  selector: 'app-search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['./search-block.component.scss']
})
export class SearchBlockComponent implements OnInit {
  displayList:string ='d-none';
  isShow: boolean = false;
  countries: any = [
    { value: 'value1', name: 'الرياض' },
    { value: 'value2', name: 'جده' },
    { value: 'value3', name: 'الدمام' },
    { value: 'value4', name: 'الطائف' },
    { value: 'value5', name: 'مكه' },
    { value: 'value6', name: 'تبوك' },
    { value: 'value7', name: 'الخبر' },
  ]


  constructor(public _ResturantCardService: ResturantCardService) { }

  ngOnInit(): void {
  }
  display(){
    this.isShow = !this.isShow
   this.displayList='d-block'
  }

}
