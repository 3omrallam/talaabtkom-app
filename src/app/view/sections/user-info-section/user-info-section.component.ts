import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserSettingsService } from 'src/app/core/services/user-settings-service/user-settings.service';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-user-info-section',
  templateUrl: './user-info-section.component.html',
  styleUrls: ['./user-info-section.component.scss']
})
export class UserInfoSectionComponent implements OnInit {

  constructor(public _AccountService: AccountService, public _UserSettingsService: UserSettingsService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.getUserName();
    this.mobileNumber();
  }
  // To Upload Photo
  onSelectFile(files: any) {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    let userToken = this._AccountService.userValue?.data?.token
    const formData = new FormData();
    formData.append('avatar', fileToUpload);
    formData.append('api_token', JSON.stringify(userToken).replace(/\"/g, ""));
    this._UserSettingsService.updateProfile(formData).subscribe((res: any) => {
      console.log(res);
      this._UserSettingsService.userEditProfile = res.data.media[0].thumb
      // console.log(this._UserSettingsService.userEditProfile);
    })
  }
  // Get User mobile number
  mobileNumber(){
    this._AccountService.getUserData(this._AccountService.userValue.data.token).subscribe((res:any) =>{
      this._AccountService.mobileNumber = res.data.phone;
    })
  }

  // Get UserData
  postUserInforamtion(data:any){   
    this._UserSettingsService.updateProfile(data).subscribe((res : any) => {
      console.log(res);
      // To Change Username Directly When Change Without Reload 
      this.getUserName();
      // this._AccountService.logout()
    })
  }
  // Update UserName 
  ngSubmit(formValue: any) {
    console.log(formValue);
    let userInfo = {
      api_token : this._AccountService.userValue.data.token,
      name : formValue.name
    }
    this.postUserInforamtion(userInfo)
    window.location.reload();
  }
  // Get UserName
  getUserName(){
    this._AccountService.getUserData(this._AccountService.userValue?.data?.token).subscribe((res: any) => {
      console.log(res);
      this._UserSettingsService.userName = res.data.name
    })
  }


}
