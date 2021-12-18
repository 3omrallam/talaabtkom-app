import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileAsidePageService {

  userProfileNavigator: Object[] = [

    {
      header: "المعلومات الشخصية",
      routerName : 'userProfile',
      icon: "iCC-Usertag",
    },
    {
      header: "إعادة توثيق الجوال",
      routerName: 'userProfile/recoverPhone',
      icon: "iCC-Mobile",
    },
    {
      header: "تغير كلمة المرور",
      routerName : 'userProfile',
      icon: "iCC-Lock",
    },
    {
      header: "الحجوزات",
      routerName: 'userProfile/reservation',
      icon: "iCC-Menu",
    },
    {
      header: "البطاقات المحفوظة",
      routerName : 'userProfile',
      icon: "iCC-Visa",
    },
    {
      header: "الشروط والأحكام",
      routerName: 'userProfile/privacyPolicy',
      icon: "iCC-Messagetext",
    },
  ];

  constructor() { }
}
