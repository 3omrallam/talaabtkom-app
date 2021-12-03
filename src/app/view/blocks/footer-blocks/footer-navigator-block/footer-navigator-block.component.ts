import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-footer-navigator-block',
  templateUrl: './footer-navigator-block.component.html',
  styleUrls: ['./footer-navigator-block.component.scss']
})
export class FooterNavigatorBlockComponent implements OnInit {

  @Input()listHeader:any;
  
  list1:any[]=[
    {element:'من نحن'}, {element:'شروط الاستخدام'}, {element:'أسئلة شائعة'}
  ]
  // list2:any[]=[
  //   {element:'تسجيل متجر '},{element:'دخول لوحة تحكم'}, {element:'شروط التعاقد'} 
  // ]
  // list3:any[]=[
  //   {element:'تسجيل دخول'},{element:'تسجيل جديد'}, {element:'اتصل بنا'} 
  // ]
  constructor() { }

  ngOnInit(): void {
  }


  

}
