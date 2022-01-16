import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResturantAsidePageService {
  resturantNavigator: Object[] = [

    {
      header: "قائمه الطعام",
      routerName: "resturant-profile/1",
      routerActive:"fCC-bold-sB cCC-text-main",
      icon: "iCC-Booksquare",
      subList: [{ title: "الاكثر مبيعا", href: "item1" }, { title: "المشويات", href: "item2" }, { title: "المقبلات", href: "item3" }, { title: "الحلويات", href: "item4"}]
    },
    {
      header: "تقييم المطعم",
      routerName: "resturant-profile/1/reviews",
      icon: "iCC-Rateresturant",
    },
    {
      header: "معلومات عن المطعم",
      routerName: "resturant-profile/1/info",
      routerActive: "fCC-bold-sB cCC-text-main",
      icon: "iCC-Information",
    }
  ];


  constructor() { }
}
