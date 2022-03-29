import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-mobile-number-forgetpassword-block',
  templateUrl: './mobile-number-forgetpassword-block.component.html',
  styleUrls: ['./mobile-number-forgetpassword-block.component.scss']
})
export class MobileNumberForgetpasswordBlockComponent implements OnInit {
  phoneForgetPasswordForm: FormGroup = new FormGroup({
    phone: new FormControl(null, [Validators.required, Validators.pattern(`[0-9]{11}`)])
  })

  constructor(public _AccountService: AccountService, public _AuthService: AuthService) { }

  ngOnInit(): void {
  }
  forgetPasswordSubmit(formValue: any) {

    this._AccountService.checkPhoneNumberForgetPassword(formValue).subscribe((res) => {
      console.log(res);
      
      if (res.success) {
        this._AccountService.ForgetPasswordChecked = 1
        this._AccountService.phoneForgetPasswordProcess = {
          phone: '+966' + formValue.phone
        }
        this._AccountService.forgetPasswordProcess = {
          phone: '+966' + formValue.phone
        }
      }
    })
  }

}
