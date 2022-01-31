import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterPageService {

  footerNavigatorList: any[] = [
    {
      header: "تصفح طلباتكم",
      subList: [{ title: "شروط الاستخدام" }, { title: "من نحن" }, { title: "أسئلة شائعة"}]
    },
    {
      header: "الشركاء",
      subList: [{title: "تسجيل متجر"}, { title: "دخول لوحة تحكم" }, { title: "شروط التعاقد" }]
    },
    {
      header: "المساعدة",
      subList: [{ title: "تسجيل دخول" }, {title: "تسجيل جديد"}, { title: "اتصل بنا" }]
    }
  ];

  constructor() { }
}
