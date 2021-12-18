import { Injectable } from '@angular/core';
import { ResturantCard } from 'src/app/view/models/models/resturantsList';

@Injectable()
export class ResturantCardService {

  resturantCardstates: ResturantCard[] = [
    {
      id: 1,
      image: 'imCC-Resturantimg2',
      title: 'مطعم خيال',
      description: '"المشويات - أكل سريع"',
      time:20,
      tables:37,
      rate:4.2,
      liked:'iCC-Heartred'
    },
    {
      id: 2,
      image: 'imCC-Resturantimg3',
      title: 'مطعم بيت المخابز',
      description: '"المشويات - أكل صحي"',
      time: 10,
      tables: 12,
      rate: 3.2,
      liked:'iCC-Heartempty'
    },
    {
      id: 3,
      image: 'imCC-Resturantimg4',
      title: ' برجر كينج',
      description: '"المشويات - أكل سريع"',
      time: 30,
      tables: 5,
      rate: 4.1,
      liked:'iCC-Heartred'
    },
    {
      id: 4,
      image: 'imCC-Resturant5',
      title: 'مطعم ميت بوكس',
      description: '"المشويات - الشرقي"',
      time: 90,
      tables: 50,
      rate: 3.7,
      liked:'iCC-Heartred'
    },
    {
      id: 5,
      image: 'imCC-Resturantimg2',
      title: 'مطعم خيال',
      description: '"المشويات - أكل سريع"',
      time: 50,
      tables: 23,
      rate: 4.9,
      liked:'iCC-Heartempty'
    }
  ]
  constructor() { }
}
