import { Injectable } from '@angular/core';
import { reviewsList } from '../../models/reviewsListModal';

@Injectable({
  providedIn: 'root'
})
export class ReviewsListService {

  reviewsList: reviewsList[] = [
    {
      id: 1,
      image: 'imCC-Userprofile3',
      name: 'محمد أحمد محمد',
      date: '5/1/2022الأربعاء',
      description:`هناك حقيقة مثبتة منذ زمن طويل  أو شكل
      توضع الفقرات في الصفحة` 

    },
    {
      id: 2,
      image: 'imCC-Userprofile2',
      name: 'بسنت احمد',
      date: '6/11/2021الأربعاء',
      description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
      توضع الفقرات في الصفحة` 

    },
    {
      id: 3,
      image: 'imCC-Userprofile',
      name: 'محمود عمر',
      date: '8/5/2019الأربعاء',
      description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
      توضع الفقرات في الصفحة توضع الفقرات في الصفحة توضع الفقرات في الصفحة` 
    },
    {
      id: 4,
      image: 'imCC-Userprofile3',
      name: 'أسماء حمدي',
      date: '8/1/2018الأربعاء',
      description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
      توضع الفقرات في الصفحة` 
    },
    {
      id: 5,
      image: 'imCC-Userprofile2',
      name: ' عمر محمد',
      date: '25/7/2017الأربعاء',
      description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
      توضع الفقرات في الصفحة` 
    },
  ]

  constructor() { }
}
