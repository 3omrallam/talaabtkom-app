import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';

@Component({
  selector: 'app-resturant-information-section',
  templateUrl: './resturant-information-section.component.html',
  styleUrls: ['./resturant-information-section.component.scss']
})
export class ResturantInformationSectionComponent implements OnInit {
  constructor(public _ResturantCardService : ResturantCardService) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
}
