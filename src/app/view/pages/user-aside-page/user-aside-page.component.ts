import { Component, OnInit } from '@angular/core';
import { UserProfileAsidePageService } from '../services/user-profile-aside-page.service';

@Component({
  selector: 'app-user-aside-page',
  templateUrl: './user-aside-page.component.html',
  styleUrls: ['./user-aside-page.component.scss']
})
export class UserAsidePageComponent implements OnInit {
  list2:any = [
   
    {
      header: "المعلومات الشخصية",
      icon:"iCC-Usertag",
    },
    {
      header: "إعادة توثيق الجوال",
      icon:"iCC-Mobile",
    },
    {
      header: "تغير كلمة المرور",
      icon:"iCC-Lock",
    },
    {
      header: "الحجوزات",
      icon:"iCC-Menu",
    },
    {
      header: "البطاقات المحفوظة",
      icon:"iCC-Visa",
    },
    {
      header: "الشروط والأحكام",
      icon:"iCC-Messagetext",
    },
  ];

  constructor(public _UserProfileAsidePageService: UserProfileAsidePageService) { }
  
  ngOnInit(): void {
    
  }

}
