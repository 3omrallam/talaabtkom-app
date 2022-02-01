import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-verify-block',
  templateUrl: './verify-block.component.html',
  styleUrls: ['./verify-block.component.scss']
})
export class VerifyBlockComponent {

  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: true,
    placeholder: '0',
    inputStyles: {
      'width': '56px',
      'height': '56px',
      'border' : '0',
      'border-radius' : '10px',
      'box-shadow': '0 .5rem 1rem rgba(0,0,0,.15)'
    }
  };

  constructor(private _AccountService : AccountService){

  }

  onOtpChange(otp : any) {
    this._AccountService.phoneProccess = {
      ...this._AccountService.phoneProccess,
      code : otp
    }
    if(otp.length === 4 ){
      this.toggleDisable()
      this._AccountService.checkVerificationNumber(this._AccountService.phoneProccess).subscribe(res => {
        if (res.success){
          this._AccountService.verificationChecked = 2
        } 
        console.log(res.success);
        
        this.toggleDisable()
      })
    }
  }
 
  toggleDisable(){
    if(this.ngOtpInput.otpForm){
      if(this.ngOtpInput.otpForm.disabled){
        this.ngOtpInput.otpForm.enable();
      }else{
        this.ngOtpInput.otpForm.disable();
      }
    }
  }
}
