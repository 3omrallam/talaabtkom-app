import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-change-password-section',
  templateUrl: './change-password-section.component.html',
  styleUrls: ['./change-password-section.component.scss']
})
export class ChangePasswordSectionComponent implements OnInit {

  model: any = [];
  message:any =''

  constructor(public _AuthService: AuthService,  public _AccountService: AccountService) { }

  ngOnInit(): void {
  }

  ngSubmit(formValue: FormData) {
    console.log(formValue);
    this._AccountService.changePassword(this._AccountService.userValue.data.token , formValue).subscribe(res =>{
      console.log(res);
      if(res.success){
        this.message ='الرقم السري تغير بنجاح'
      }else{
        this.message = 'الرقم السري غير صحيح'
      }
      
    } )
    
  }
}
