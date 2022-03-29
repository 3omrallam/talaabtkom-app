import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/user/account.service';
import { AuthService } from 'src/app/core/auth/auth.service';
@Component({
  selector: 'app-phone-number-block',
  templateUrl: './phone-number-block.component.html',
  styleUrls: ['./phone-number-block.component.scss']
})
export class PhoneNumberBlockComponent implements OnInit {
  number = '+966'
  
  phoneForm:FormGroup = new FormGroup({
    phone:new FormControl(null , [Validators.required , Validators.pattern(`[0-9]{11}`)])
  })

  constructor(private _AccountService: AccountService, public _AuthService: AuthService) { }

  ngOnInit(): void {}
  ngSubmit(formValue : any){
    console.log(formValue);
    this._AccountService.checkPhoneNumber(formValue).subscribe((res) => {
      console.log(res);
      if (res.success) {
        this._AccountService.verificationChecked = 1
        this._AccountService.phoneProccess = {
          phone :'+966'+formValue.phone
          
        }
        console.log(this._AccountService.phoneProccess.phone);
        this._AccountService.registerProccess = {
          phone: '+966'+formValue.phone
        }
      }
    })    
  }

}
