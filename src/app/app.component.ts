import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { LanguageService } from './core/services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'talbaatkom';
  textDir: any = 'rtl';
  

  constructor(public activeRouter: Router, public translate: TranslateService, public _LanguageService: LanguageService){
    // Change Website Direction
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'ar') {
        this._LanguageService.textDir = 'rtl';
      }
      else {
        this._LanguageService.textDir = 'ltr';
      }
    });
    this._LanguageService.currentLang = localStorage.getItem('currentLang');
    this.translate.use(this._LanguageService.currentLang)
  }
  

  classCondition(){
    return this.activeRouter.url !== '/' && this.activeRouter.url !== '/resturant-profile/1';
  }
  resturantProfile(){
    return this.activeRouter.url == '/resturant-profile/1';
  }

}
