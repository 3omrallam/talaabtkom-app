import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resturants-list-page',
  templateUrl: './resturants-list-page.component.html',
  styleUrls: ['./resturants-list-page.component.scss']
})
export class ResturantsListPageComponent implements OnInit {
  resturantCardstates : any = [
    {
      id: 1,
      image: 'imCC-Resturantimg2',
      title : 'مطعم خيال',
      description: 'المشويات - أكل سريع'
    },
    {
      id: 2,
      image: 'imCC-Resturantimg3',
      title : 'مطعم بافلو برجر',
      description: 'المشويات - أكل سريع'
    },
    {
      id: 3,
      image: 'imCC-Resturantimg4',
      title : 'مطعم بافلو برجر',
      description: 'المشويات - أكل سريع'
    },
    {
      id: 1,
      image: 'imCC-Resturantimg2',
      title : 'مطعم بافلو برجر',
      description: 'المشويات - أكل سريع'
    },
    {
      id: 2,
      image: 'imCC-Resturantimg3',
      title : 'مطعم بافلو برجر',
      description: 'المشويات - أكل سريع'
    },
    {
      id: 3,
      image: 'imCC-Resturantimg4',
      title : 'مطعم بافلو برجر',
      description: 'المشويات - أكل سريع'
    },
    {
      id: 1,
      image: 'imCC-Resturantimg2',
      title : 'مطعم بافلو برجر',
      description: 'المشويات - أكل سريع'
    },
    {
      id: 2,
      image: 'imCC-Resturantimg3',
      title : 'مطعم بافلو برجر',
      description: 'المشويات - أكل سريع'
    },
    {
      id: 3,
      image: 'imCC-Resturantimg4',
      title : 'مطعم بافلو برجر',
      description: 'المشويات - أكل سريع'
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
