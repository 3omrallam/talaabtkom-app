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
      header: "المفضلة",
      routerName: 'userProfile/t',
      icon: "iCC-Menu",
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
      header: "طلباتي",
      routerName: 'userProfile/reservation',
      icon: "iCC-Menu",
    },
    {
      header: "أرائي",
      routerName: 'userProfile/r',
      icon: "iCC-Menu",
    },
    {
      header: "الإشعارات",
      routerName: 'userProfile/b',
      icon: "iCC-Menu",
    },
    {
      header: "الشروط والأحكام",
      routerName: 'userProfile/privacy-policy',
      icon: "iCC-Messagetext",
    },
  ];

  constructor() { }
}
