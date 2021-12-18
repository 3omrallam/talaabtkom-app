import { Injectable } from '@angular/core';
import { ResturantGridCard } from '../../models/models/resturantGridCardModel';

@Injectable({
  providedIn: 'root'
})
export class ResturantGridCardService {

  resturantGridCardstates: ResturantGridCard[] = [
    {
      id: 1,
      image: 'imCC-Resturant1',
      title: 'مطعم بافلو برجر',
      logo: 'imCC-Resturantlogo1',
      description: 'المشويات - أكل سريع',
      time: 90,
      tables: 10,
      rate: 3.2,
      liked:'iCC-Heartred'
    },
    {
      id: 2,
      image: 'imCC-Resturant2',
      title: 'مطعم طاية ',
      logo: 'imCC-Resturantlogo2',
      description: '"المشويات - أكل صحي"',
      time: 20,
      tables: 30,
      rate: 4.3,
      liked: 'iCC-Heartempty'
      
    },
    {
      id: 3,
      image: 'imCC-Resturant3',
      title: 'مطعم السمك الذهبي',
      logo: 'imCC-Resturantlogo3',
      description: '"المشويات - أسماك"',
      time: 40,
      tables: 7,
      rate: 4.7,
      liked: 'iCC-Heartred'
    },
  ]

  constructor() { }
}
