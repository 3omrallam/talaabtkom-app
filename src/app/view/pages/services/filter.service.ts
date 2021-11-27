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
    { value: 'value4', label: 'البيتزا' },
    { value: 'value4', label: 'المشروبات' },
    { value: 'value4', label: 'القهوة' },
  ]
  optionsTwo: any = [
    { value: 'value1', label: 'الكل' },
    { value: 'value2', label: 'صحي ولذيذ' },
    { value: 'value3', label: 'الأعلي تقيما' },
    { value: 'value4', label: 'أقل وقت للإنتظار' },
    { value: 'value4', label: 'بدون حد أدني للطلبات' },
    { value: 'value4', label: 'متاح الجلسات فقط' },
    { value: 'value4', label: 'عروض خصومات' },
  ]

  constructor() { }
}
