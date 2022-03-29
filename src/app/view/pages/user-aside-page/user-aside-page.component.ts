import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserSettingsService } from 'src/app/core/services/user-settings-service/user-settings.service';
import { AccountService } from 'src/app/core/services/user/account.service';
import { UserProfileAsidePageService } from '../services/user-profile-aside-page.service';

@Component({
  selector: 'app-user-aside-page',
  templateUrl: './user-aside-page.component.html',
  styleUrls: ['./user-aside-page.component.scss']
})
export class UserAsidePageComponent implements OnInit {
  @ViewChild('fileInput') el!: ElementRef;
  urlLink:any;
  url: any;

  constructor(public fb: FormBuilder, public _AccountService: AccountService ,public _UserSettingsService: UserSettingsService ,public _UserProfileAsidePageService: UserProfileAsidePageService) { }
  registrationForm = this.fb.group({
    avatar: [null]
  })  
  ngOnInit(): void {
    this.getUserImage();
   
  } 

  //Upload user profile image
  onSelectFile(files:any) {
    if (files.length === 0) {
      return; 
    }
    let fileToUpload = <File>files[0];
    let userToken = this._AccountService.userValue?.data?.token
    const formData = new FormData();
    formData.append('avatar', fileToUpload);
    formData.append('api_token', JSON.stringify(userToken).replace(/\"/g, ""));
    // TODO : done ya nada :)
      this._UserSettingsService.updateProfile(formData).subscribe((res : any)=>{
        console.log(res);
        this._UserSettingsService.userEditProfile = res.data.media[0].thumb
        console.log(this._UserSettingsService.userEditProfile);
      })
  }
  getUserImage(){
    this._AccountService.getUserData(this._AccountService.userValue?.data?.token).subscribe((res: any) => {
      console.log(res);
      this._UserSettingsService.userEditProfile = res.data.media[0].thumb
      console.log(this._UserSettingsService.userEditProfile);
    })
  }

 

}
