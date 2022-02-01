import { Injectable } from '@angular/core';
import { ResturantGridCard } from '../../../core/models/resturantGridCardModel';

@Injectable({
  providedIn: 'root'
})
export class ResturantGridCardService {

  resturantGridCardstates: ResturantGridCard[] = [
    {
      id: 1,
      image: 'imCC-Newresturant-1',
      title: 'مطعم بافلو برجر',
      logo: 'imCC-Newlogo-1',
      description: 'المشويات - أكل سريع',
      time: 90,
      tables: 10,
      rate: 3.2,
      liked:'iCC-Newlike',
      status:''
    },
    {
      id: 2,
      image: 'imCC-Newresturant-2',
      title: 'مطعم طاية ',
      logo: 'imCC-Newlogo-1',
      description: '"المشويات - أكل صحي"',
      time: 20,
      tables: 30,
      rate: 4.3,
      liked: 'iCC-Newlike',
      status: ''
      
    },
    {
      id: 3,
      image: 'imCC-Newresturant-3',
      title: 'مطعم ماكدونالدز',
      logo: 'imCC-Newlogo-1',
      description: '"المشويات - أسماك"',
      time: 40,
      tables: 7,
      rate: 4.7,
      liked: 'iCC-Newlike',
      status: ''
    },
    {
      id: 3,
      image: 'imCC-Newresturant-4',
      title: 'مطعم كنتاكي',
      logo: 'imCC-Newlogo-1',
      description: '"المشويات - أسماك"',
      time: 40,
      tables: 7,
      rate: 4.7,
      liked: 'iCC-Newlike',
      status: ''
    },
  ]

  constructor() { }
}
