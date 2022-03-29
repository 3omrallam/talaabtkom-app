import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-send-otp-forgetpassword-block',
  templateUrl: './send-otp-forgetpassword-block.component.html',
  styleUrls: ['./send-otp-forgetpassword-block.component.scss']
})
export class SendOtpForgetpasswordBlockComponent implements OnInit {
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: true,
    placeholder: '0',
    inputStyles: {
      'width': '70px',
      'height': '70px',
      'border': '0',
      'border-radius': '10px',
      'box-shadow': '0 .5rem 1rem rgba(0,0,0,.15)'
    }
  };

  constructor(private _AccountService: AccountService) { }

  ngOnInit(): void {
  }
  ForgetPasswordOTP(otp: any) {
    this._AccountService.phoneForgetPasswordProcess = {
      ...this._AccountService.phoneForgetPasswordProcess,
      code: otp
    }
    if (otp.length === 4) {
      this.toggleDisable()
      this._AccountService.checkVerificationNumber(this._AccountService.phoneForgetPasswordProcess).subscribe(res => {
        if (res.success) {
          this._AccountService.ForgetPasswordChecked = 2;
          
        }

        this.toggleDisable()
      })
    }
  }
  toggleDisable() {
    if (this.ngOtpInput.otpForm) {
      if (this.ngOtpInput.otpForm.disabled) {
        this.ngOtpInput.otpForm.enable();
      } else {
        this.ngOtpInput.otpForm.disable();
      }
    }
  }

}
