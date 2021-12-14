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
      title: '"المشويات - أكل سريع"',
      logo: 'imCC-Resturantlogo1',
      description: 'المشويات - أكل سريع',
      time:'90',
      tables:'10',
      rate:'3.2'
    },
    {
      id: 2,
      image: 'imCC-Resturant2',
      title: 'مطعم طاية ',
      logo: 'imCC-Resturantlogo2',
      description: '"المشويات - أكل صحي"',
      time:'20',
      tables: '30',
      rate: '4.3'
    },
    {
      id: 3,
      image: 'imCC-Resturant3',
      title: 'مطعم السمك الذهبي',
      logo: 'imCC-Resturantlogo3',
      description: '"المشويات - أسماك"',
      time:'40',
      tables: '7',
      rate: '4.7'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
