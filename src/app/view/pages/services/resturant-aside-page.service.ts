import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResturantAsidePageService {
  resturantNavigator: Object[] = [

    {
      header: "قائمه الطعام",
      routerName: "resturant-profile/1",
      routerActive:"fCC-bold-sI cCC-text-main",
      icon: "iCC-Booksquare",
      subList: [{ title: "الاكثر مبيعا" }, { title: "المشويات" }, { title: "المقبلات"}, { title: "الحلويات"}]
    },
    {
      header: "تقييم المطعم",
      routerName: "resturant-profile/nnjm",
      icon: "iCC-Rateresturant",
    },
    {
      header: "معلومات عن المطعم",
      routerName: "resturant-profile/1/info",
      routerActive: "fCC-bold-sI cCC-text-main",
      icon: "iCC-Information",
    }
  ];


  constructor() { }
}
