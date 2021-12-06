import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu-navigators',
  templateUrl: './side-menu-navigators.component.html',
  styleUrls: ['./side-menu-navigators.component.scss']
})
export class SideMenuNavigatorsComponent implements OnInit {

  list:any = [
   
    {
      header: "قائمه الطعام",
      icon:"",
      subList: [{title: "الاكثر مبيعا"},{title: "المشويات"},{title: "المقبلات"},{title: "الحلويات"}]
    },
    {
      header: "تقييم المطعم",
      icon:"",
    },
    {
      header: "معلومات عن المطعم",
      icon:"",
    }
  ];




  constructor() { }

  ngOnInit(): void {
  }

}
