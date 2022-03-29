import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  options: any = [
    { id: 'value1', label: 'الكل' },
    { value: 'value2', label: 'الشارقي' },
    { value: 'value3', label: 'المطبخ الايطالي' },
    { value: 'value4', label: 'المكونات' },
    { value: 'value5', label: 'البيتزا' },
    { value: 'value6', label: 'المشروبات' },
    { value: 'value7', label: 'القهوة' },
  ]
  optionsTwo: any = [
    { id: 'توصيل مجاني', name:'توصيل مجاني' },
    { id: 'الأعلي تقيما', name:'الأعلي تقيما' },
    { id: 'اجدد المطاعم', name:'اجدد المطاعم' },
  ]

  constructor() { }
}
