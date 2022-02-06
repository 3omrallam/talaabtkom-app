import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileAsidePageService {

  userProfileNavigator: Object[] = [

    {
      header: "المعلومات الشخصية",
      routerName : '',
      icon: "iCC-Usertag",
    },
    {
      header: "المفضلة",
      routerName: '/t',
      icon: "iCC-Menu",
    },
    {
      header: "إعادة توثيق الجوال",
      routerName: '/recover-phone',
      icon: "iCC-Mobile",
    },
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
      header: "أرائي",
      routerName: '/r',
      icon: "iCC-Myopinions",
    },
    {
      header: "الإشعارات",
      routerName: '/b',
      icon: "iCC-Messagetext",
    },
  ];

  constructor() { }
}
