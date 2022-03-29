import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core/services/language/language.service';
import { UserSettingsService } from 'src/app/core/services/user-settings-service/user-settings.service';
import { AccountService } from 'src/app/core/services/user/account.service';
import { NavbarService } from 'src/app/view/layout/services/navbar.service';

@Component({
  selector: 'app-user-profile-block',
  templateUrl: './user-profile-block.component.html',
  styleUrls: ['./user-profile-block.component.scss']
})
export class UserProfileBlockComponent implements OnInit {
  userName:any

  constructor(public _UserSettingsService: UserSettingsService,public _AccountService: AccountService, public _NavbarService: NavbarService, public _LanguageService: LanguageService, public translate: TranslateService) { 
   
  }

  ngOnInit(): void {
    // this._AccountService.getUserName();
    this.getUserImage();
    this.getUserName()
  }
 
  // Update user Image in navbar
  getUserImage(){
    this._AccountService.getUserData(this._AccountService?.userValue?.data?.token).subscribe((res: any) => {
      this._AccountService.userImage = res.data.media[0]
      // console.log(this._AccountService.userImage);
      
    })
  }
  getUserName() {
    this._AccountService.getUserData(this._AccountService.userValue?.data?.token).subscribe((res: any) => {
      // console.log(res);
      this.userName= res.data.name
      // console.log(this.userName);
    })
  }
}
