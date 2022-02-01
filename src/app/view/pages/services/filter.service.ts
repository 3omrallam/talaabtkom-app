import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  options: any = [
    { value: 'value1', label: 'الكل' },
    { value: 'value2', label: 'الشارقي' },
    { value: 'value3', label: 'المطبخ الايطالي' },
    { value: 'value4', label: 'المكونات' },
    { value: 'value5', label: 'البيتزا' },
    { value: 'value6', label: 'المشروبات' },
    { value: 'value7', label: 'القهوة' },
  ]
  optionsTwo: any = [
    { value: 'value8', label: 'الأكثر شهرة' },
    { value: 'value9', label: 'أقل نسبة في الطلب' },
    { value: 'value10', label: 'الأعلي تقيما' },
    { value: 'value11', label: 'اقل وقت للانتظار' },
    { value: 'value12', label: 'بدون حد أدني للطلبات' },
    { value: 'value13', label: 'الأسرع في التوصيل' },
    { value: 'value14', label: 'اجدد المطاعم' },
  ]

  constructor() { }
}
