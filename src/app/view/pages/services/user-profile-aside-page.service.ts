import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileAsidePageService {

  userProfileNavigator: any[] = [

    {
      header: "المعلومات الشخصية",
      routerName : '',
      icon: "iCC-Usertag",
    },
    {
      header: "المفضلة",
      routerName: '/favourite',
      icon: "iCC-Usertag",
    },
    // {
    //   header: "إعادة توثيق الجوال",
    //   routerName: '/recover-phone',
    //   icon: "iCC-Mobile",
    // },
    {
      header: "تغير كلمة المرور",
      routerName: '/change-password',
      icon: "iCC-Lock",
    },
    {
      header: "طلباتي",
      routerName: '/reservation',
      icon: "iCC-Menu",
    },
    {
      header: "الإشعارات",
      routerName: '/notifications',
      icon: "iCC-Messagetext",
    },
    {
      header: "الإعدادات",
      routerName: '/settings',
      icon: "iCC-settingBlack",
    },
  ];

  constructor() { }
}
