import { Injectable } from '@angular/core';
import {menuList} from '../../models/models/menuListModel'
@Injectable({
  providedIn: 'root'
})
export class ResturantMenuService {
  resturantMenuStates: menuList[] = [
    {
      id: 1,
      image: 'imCC-Menuimg1',
      title: 'وجبة كباب مخصوص',
      description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
      القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
      `,
      salary: ' ر.س50',
      liked:'iCC-Heartempty',
      numOfLiked:'3546',
    },
    {
      id: 2,
      image: 'imCC-Menuimg2',
      title: 'وجبة لحمة مخصوص',
      description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
      القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
      `,
      salary: ' ر.س70',
      liked: 'iCC-Heartempty',
      numOfLiked: '3674',
    },
    {
      id: 3,
      image: 'imCC-Menuimg3',
      title: 'وجبة كباب مخصوص',
      description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
      القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
      `,
      salary: ' ر.س30',
      liked: 'iCC-Heartred',
      numOfLiked: '2674',
    },
    {
      id: 4,
      image: 'imCC-Menuimg2',
      title: 'وجبة لحمة مخصوص',
      description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
      القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
      `,
      salary: ' ر.س25.5',
      liked: 'iCC-Heartempty',
      numOfLiked: '3548',
    },
    {
      id: 5,
      image: 'imCC-Menuimg2',
      title: 'وجبة كباب مخصوص',
      description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
      القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
      `,
      salary: ' ر.س88',
      liked: 'iCC-Heartred',
      numOfLiked: '3647',
    },
    {
      id: 6,
      image: 'imCC-Menuimg3',
      title: 'وجبة لحمة مخصوص',
      description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
      القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
      `,
      salary: ' ر.س42',
      liked: 'iCC-Heartempty',
      numOfLiked: '4638',
    },
    {
      id: 7,
      image: 'imCC-Menuimg2',
      title: 'وجبة كباب مخصوص',
      description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
      القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
      `,
      salary: ' ر.س115',
      liked: 'iCC-Heartempty',
      numOfLiked: '1587',
    },
    {
      id: 8,
      image: 'imCC-Menuimg1',
      title: 'وجبة لحمة مخصوص',
      description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
      القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
      `,
      salary: ' ر.س65',
      liked: 'iCC-Heartempty',
      numOfLiked: '3852',
    },
  
  ]
  constructor() { }
}

