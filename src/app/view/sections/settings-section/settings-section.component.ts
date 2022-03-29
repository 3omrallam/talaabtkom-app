import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MarketService } from 'src/app/core/services/market/market.service';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-settings-section',
  templateUrl: './settings-section.component.html',
  styleUrls: ['./settings-section.component.scss']
})
export class SettingsSectionComponent implements OnInit {
  @ViewChild('reciveMethodBTN') reciveMethodBTN! : ElementRef;
  check: boolean = JSON.parse(localStorage.getItem('nearbyMarkets')!).is_default 
  checkLanguage: any  


  constructor(public _MarketService: MarketService, public _AccountService: AccountService, public translate: TranslateService) { }

  ngOnInit(): void {
    // if (localStorage.getItem('currentLang') == 'en'){
    //   this.checkLanguage == true
    // }else{
    //   this.checkLanguage == false
    // }
  }
  radioValue(e : any, methodVal : any){
    this._MarketService.nearbyProccess = {
      is_default : methodVal,
      latitude : JSON.parse(localStorage.getItem('nearbyMarkets')!).latitude,
      longitude : JSON.parse(localStorage.getItem('nearbyMarkets')!).longitude,
    }
    localStorage.setItem('nearbyMarkets', JSON.stringify(this._MarketService.nearbyProccess))
    
    e.target.checked 
  }

  changeCurrentLang(lang: any) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang)

    // e.target.checked 
    
  }


}
