import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resturant-aside-page',
  templateUrl: './resturant-aside-page.component.html',
  styleUrls: ['./resturant-aside-page.component.scss']
})
export class ResturantAsidePageComponent implements OnInit {
  // list : any = [
  //   {
  //     title : "الاكثر مبيعا",
  //   },
  //   {
  //     title: "المشويات",
  //   },
  //   {
  //     title: "المقبلات"
  //   },
  //   {title: "الحلويات"}
  // ]
  list:any = [
   
    {
      header: "قائمه الطعام",
      icon:"iCC-Booksquare",
      subList: [{title: "الاكثر مبيعا"},{title: "المشويات"},{title: "المقبلات"},{title: "الحلويات"}]
    },
    {
      header: "تقييم المطعم",
      icon:"iCC-Rateresturant",
    },
    {
      header: "معلومات عن المطعم",
      icon:"iCC-Information",
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
