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
      routerName: 'userProfile/recover-phone',
      icon: "iCC-Mobile",
    },
    {
      header: "تغير كلمة المرور",
      routerName: 'userProfile/change-password',
      icon: "iCC-Lock",
    },
    {
      header: "الحجوزات",
      routerName: 'userProfile/reservation',
      icon: "iCC-Menu",
    },
    {
      header: "البطاقات المحفوظة",
      routerName : 'userProfile/n',
      icon: "iCC-Visa",
    },
    {
      header: "الشروط والأحكام",
      routerName: 'userProfile/privacy-policy',
      icon: "iCC-Messagetext",
    },
  ];

  constructor() { }
}
