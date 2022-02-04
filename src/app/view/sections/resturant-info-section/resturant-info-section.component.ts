import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';

@Component({
  selector: 'app-resturant-info-section',
  templateUrl: './resturant-info-section.component.html',
  styleUrls: ['./resturant-info-section.component.scss']
})
export class ResturantInfoSectionComponent implements OnInit {
  constructor(public activeRouter: ActivatedRoute, public _ResturantCardService : ResturantCardService) { }

  ngOnInit(): void {
  }


  ngOnDestroy(): void {
  }

}
