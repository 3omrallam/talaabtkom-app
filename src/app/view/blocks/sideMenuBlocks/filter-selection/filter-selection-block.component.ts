import { Component, Input, OnInit } from '@angular/core';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';

@Component({
  selector: 'app-filter-selection-block',
  templateUrl: './filter-selection-block.component.html',
  styleUrls: ['./filter-selection-block.component.scss']
})
export class FilterSelectionBlockComponent implements OnInit {
  


  @Input() items: any
  @Input() change: any
  @Input() checked: any
  constructor(public _ResturantCardService: ResturantCardService) { }

  ngOnInit(): void {
    
  }
 
  

}
