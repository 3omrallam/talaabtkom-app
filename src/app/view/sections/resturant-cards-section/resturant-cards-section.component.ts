import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resturant-cards-section',
  templateUrl: './resturant-cards-section.component.html',
  styleUrls: ['./resturant-cards-section.component.scss']
})
export class ResturantCardsSectionComponent implements OnInit {
  resturantCardstates : any = [
    {
      id: 1,
      image: 'imCC-Resturant1',
      title : 'مطعم بافلو برجر',
      logo: 'imCC-Resturantlogo1',
      description: 'المشويات - أكل سريع'
    },
    {
      id: 2,
      image: 'imCC-Resturant2',
      title : 'مطعم بافلو برجر',
      logo: 'imCC-Resturantlogo1',
      description: 'المشويات - أكل سريع'
    },
    {
      id: 3,
      image: 'imCC-Resturant3',
      title : 'مطعم بافلو برجر',
      logo: 'imCC-Resturantlogo1',
      description: 'المشويات - أكل سريع'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
