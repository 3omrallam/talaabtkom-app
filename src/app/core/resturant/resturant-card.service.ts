import { Injectable } from '@angular/core';

@Injectable()
export class ResturantCardService {

  resturantCardstates: any[] = [
    {
      id: 1,
      image: 'imCC-Resturantimg2',
      title: 'مطعم خيال',
      description: 'المشويات - أكل سريع'
    },
    {
      id: 2,
      image: 'imCC-Resturantimg3',
      title: 'مطعم بافلو برجر',
      description: 'المشويات - أكل سريع'
    },
    {
      id: 3,
      image: 'imCC-Resturantimg4',
      title: 'مطعم بافلو برجر',
      description: 'المشويات - أكل سريع'
    },
    {
      id: 4,
      image: 'imCC-Resturantimg2',
      title: 'مطعم بافلو برجر',
      description: 'المشويات - أكل سريع'
    },
    {
      id: 5,
      image: 'imCC-Resturantimg3',
      title: 'مطعم بافلو برجر',
      description: 'المشويات - أكل سريع'
    }
  ]
  constructor() { }
}
