import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resturant-page',
  templateUrl: './resturant-page.component.html',
  styleUrls: ['./resturant-page.component.scss']
})
export class ResturantPageComponent implements OnInit {
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
