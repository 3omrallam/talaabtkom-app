import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PagesService } from 'src/app/core/services/pages/pages.service';
@Component({
  selector: 'app-contactus-section',
  templateUrl: './contactus-section.component.html',
  styleUrls: ['./contactus-section.component.scss']
})
export class ContactusSectionComponent implements OnInit {
  message:any =''
  // Animation Menu QR code Path
  options: AnimationOptions = {
    path: '../../../../assets/animations/Contact-Us.json',
  };

  constructor(public _PagesService: PagesService, public _AuthService: AuthService, public translate: TranslateService) { }

  ngOnInit(): void {
  }
  ngSubmit(formValue: any) {
    let data={
      phone: '+966' + formValue.phone,
      title: formValue.title,
      description: formValue.description
    }
    console.log(data);
    this._PagesService.contactUsForm(data).subscribe((res:any) =>{
      console.log(res);
      if(res.success){
        this.message ='تم التواصل بنجاح '
      }
    } )  
  }
  animationCreated(animationItem: AnimationItem): void {
  }

}
