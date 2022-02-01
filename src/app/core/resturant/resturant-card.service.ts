import { Injectable } from '@angular/core';
import { ResturantCard } from 'src/app/core/models/resturantsList';

@Injectable()
export class ResturantCardService {

  resturantCardstates: ResturantCard[] = [
    {
      id: 1,
      image: 'iCC-resturant-icon',
      title: 'مطعم خيال',
      description: '"المشويات - أكل سريع"',
      time:20,
      tables:37,
      logo: 'imCC-Newlogo-1',
      rate:4.2,
      liked:'iCC-Newlike',
      status:'مشغول'
    },
    {
      id: 2,
      image: 'imCC-Newresturant-2',
      title: 'مطعم بيت المخابز',
      description: '"المشويات - أكل صحي"',
      time: 10,
      logo: 'imCC-Newlogo-1',
      tables: 12,
      rate: 3.2,
      liked:'iCC-Newlike',
      status: ''
    },
    {
      id: 3,
      image: 'imCC-Newresturant-3',
      title: ' برجر كينج',
      description: '"المشويات - أكل سريع"',
      time: 30,
      tables: 5,
      logo: 'imCC-Newlogo-1',
      rate: 4.1,
      liked:'iCC-Newlike',
      status: 'مشغول'
    },
    {
      id: 4,
      image: 'imCC-Newresturant-4',
      title: 'مطعم ميت بوكس',
      description: '"المشويات - الشرقي"',
      time: 90,
      tables: 50,
      rate: 3.7,
      logo: 'imCC-Newlogo-1',
      liked:'iCC-Newlike',
      status: ''
    },
    {
      id: 5,
      image: 'imCC-Newresturant-1',
      title: 'مطعم خيال',
      description: '"المشويات - أكل سريع"',
      time: 50,
      tables: 23,
      logo: 'imCC-Newlogo-1',
      rate: 4.9,
      liked:'iCC-Newlike',
      status: ''
    }
  ]
  constructor() { }
}
