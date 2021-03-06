import { Injectable } from '@angular/core';
import { resturantMenuList } from 'src/app/core/models/menuListModels/resturantMenuListModel';
@Injectable({
  providedIn: 'root'
})
export class ResturantMenuService {
  resturantMenuStates: resturantMenuList[] = [
    // List 1
    {
      Header: "الاكثر مبيعا",
      id:"item1",
      subList: [
        {
          id: 1,
          image: 'imCC-Menuimg1',
          title: 'وجبة كباب مخصوص',
          description: `نصف فرخه - أرز - خضزوات`,
          price: 50,
          liked: 'iCC-Newlike',
          numOfLiked: '3546',
        },
        {
          id: 2,
          image: 'imCC-Menuimg2',
          title: 'وجبة لحمة مخصوص',
          description: `نصف فرخه - أرز - خضزوات `,
          price: 70,
          liked: 'iCC-Newlike',
          numOfLiked: '3674',
        }]
    },
    {
      Header: "المشويات",
      id: "item2",
      subList: [
        {
          id: 3,
          image: 'imCC-Menuimg3',
          title: 'وجبة كباب مخصوص',
          description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
         القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة`,
         price: 30,
          liked: 'iCC-Newlike',
          numOfLiked: '2674',
        },
        {
          id: 4,
          image: 'imCC-Menuimg2',
          title: 'وجبة لحمة مخصوص',
          description: `نصف فرخه - أرز - خضزوات`,
          price: 25,
          liked: 'iCC-Newlike',
          numOfLiked: '3548',
        }]
    },
    {
      Header: "المقبلات",
      id: "item3",
      subList: [
        {
          id: 5,
          image: 'imCC-Menuimg2',
          title: 'وجبة كباب مخصوص',
          description: `نصف فرخه - أرز - خضزوات`,
          price: 88,
          liked: 'iCC-Newlike',
          numOfLiked: '3647',
        },
        {
          id: 6,
          image: 'imCC-Menuimg3',
          title: 'وجبة لحمة مخصوص',
          description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
         القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة`,
         price: 42,
          liked: 'iCC-Newlike',
          numOfLiked: '4638',
        },
      ]
    },
    {
      Header: "الحلويات",
      id: "item4",
      subList: [
        {
          id: 7,
          image: 'imCC-Menuimg2',
          title: 'وجبة كباب مخصوص',
          description: `نصف فرخه - أرز - خضزوات`,
          price: 115,
          liked: 'iCC-Newlike',
          numOfLiked: '1587',
        },
        {
          id: 8,
          image: 'imCC-Menuimg1',
          title: 'وجبة لحمة مخصوص',
          description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
           القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة`,
          price: 65,
          liked: 'iCC-Newlike',
          numOfLiked: '3852',
        }]
    }

  ]
  constructor() { }
}

