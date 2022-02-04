import { Injectable } from '@angular/core';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';

@Injectable({
  providedIn: 'root'
})
export class ResturantAsidePageService {
  
  resturantNavigator: Object[] = [

    {
      header: "قائمه الطعام",
      routerName: `/categories`,
      routerActive:"fCC-bold-sB cCC-text-main",
      icon: "iCC-Booksquare",
      subList: [{ title: "الاكثر مبيعا", href: "item1" }, { title: "المشويات", href: "item2" }, { title: "المقبلات", href: "item3" }, { title: "الحلويات", href: "item4"}]
    },
    {
      header: "تقييم المطعم",
      routerName: `/reviews`,
      icon: "iCC-Rateresturant",
    },
    {
      header: "معلومات عن المطعم",
      routerName: "/info",
      routerActive: "fCC-bold-sB cCC-text-main",
      icon: "iCC-Information",
    }
  ];


  constructor(private _ResturantCardService : ResturantCardService) { }
}
