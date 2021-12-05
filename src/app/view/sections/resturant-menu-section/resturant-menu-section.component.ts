import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resturant-menu-section',
  templateUrl: './resturant-menu-section.component.html',
  styleUrls: ['./resturant-menu-section.component.scss']
})
export class ResturantMenuSectionComponent implements OnInit {
  resturantMenuStates : any = [
    {
      id: 1,
      image: 'imCC-Menuimg1',
      title : 'وجبة كباب مخصوص',
      description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
      القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
      `,
      salary:' ر.س85' 
    },
    {
      id: 2,
      image: 'imCC-Menuimg2',
      title : 'مطعم بافلو برجر',
      description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
      القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
      `,
      salary:' ر.س85' 
    },
    {
      id: 3,
      image: 'imCC-Menuimg3',
      title : 'مطعم بافلو برجر',
      description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
      القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
      `,
      salary:' ر.س85' 
    },
    {
      id: 1,
      image: 'imCC-Menuimg1',
      title : 'مطعم بافلو برجر',
       description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
      القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
      `,
      salary:' ر.س85' 
    },
    {
      id: 2,
      image: 'imCC-Menuimg2',
      title : 'مطعم بافلو برجر',
       description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
      القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
      `,
      salary:' ر.س85' 
    },
    {
      id: 3,
      image: 'imCC-Menuimg3',
      title : 'مطعم بافلو برجر',
       description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
      القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
      `,
      salary:' ر.س85' 
    },
    {
      id: 1,
      image: 'imCC-Menuimg1',
      title : 'مطعم بافلو برجر',
       description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
      القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
      `,
      salary:' ر.س85' 
    },
    {
      id: 2,
      image: 'imCC-Menuimg2',
      title : 'مطعم بافلو برجر',
       description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
      القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
      `,
      salary:' ر.س85' 
    },
    {
      id: 3,
      image: 'imCC-Menuimg3',
      title : 'مطعم بافلو برجر',
       description: `هناك حقيقة مثبتة منذ زمن طويل وه أن المحتوى المقروء لصفحة ما سيلهية
      القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
      `,
      salary:' ر.س85' 
    },
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
