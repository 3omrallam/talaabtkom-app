import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent implements OnInit {
  model: any = [];
  constructor(public _AccountService: AccountService, public _AuthService: AuthService, public translate: TranslateService) { }

  ngOnInit(): void {
  }
  
  ngSubmit(formValue: any) {
    this._AccountService.forgetPasswordProcess = {
      ...this._AccountService.forgetPasswordProcess,
      ...formValue
    }
    this._AccountService.UpdatePassword(this._AccountService.forgetPasswordProcess).subscribe(res => {
      if (res.success) {
        this._AuthService.AuthService = true
      }
    })

  }
 
  
}
