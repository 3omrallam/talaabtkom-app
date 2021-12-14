import { Injectable } from '@angular/core';

@Injectable()
export class ResturantCardService {

  resturantCardstates: any[] = [
    {
      id: 1,
      image: 'imCC-Resturantimg2',
      title: 'مطعم خيال',
      description: '"المشويات - أكل سريع"',
      time:'20',
      tables:'37',
      rate:'4.2'
    },
    {
      id: 2,
      image: 'imCC-Resturantimg3',
      title: 'مطعم بيت المخابز',
      description: '"المشويات - أكل صحي"',
      time: '10',
      tables: '12',
      rate: '3.2'
    },
    {
      id: 3,
      image: 'imCC-Resturantimg4',
      title: ' برجر كينج',
      description: '"المشويات - أكل سريع"',
      time: '30',
      tables: '5',
      rate: '4.1'
    },
    {
      id: 4,
      image: 'imCC-Resturant5',
      title: 'مطعم ميت بوكس',
      description: '"المشويات - الشرقي"',
      time: '90',
      tables: '50',
      rate: '3.7'
    },
    {
      id: 5,
      image: 'imCC-Resturantimg2',
      title: 'مطعم خيال',
      description: '"المشويات - أكل سريع"',
      time: '50',
      tables: '23',
      rate: '4.9'
    }
  ]
  constructor() { }
}
