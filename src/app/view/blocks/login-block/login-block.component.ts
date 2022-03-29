import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth/auth.service';
import { AccountService } from 'src/app/core/services/user/account.service';


@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss']
})
export class LoginBlockComponent implements OnInit {
  constructor(private router: Router, public _AccountService: AccountService, public _AuthService: AuthService, public translate: TranslateService) {}

  ngOnInit(): void {
  }

  ngSubmit(formValue : any){
    console.log(formValue);
    
    let data={
      phone: '+966' + formValue.phone,
      password: formValue.password
    }
    console.log(data);
    
    this._AccountService.login(data)
      .pipe(first()).subscribe(res => {
        if(res.success == false)
        {
          this._AccountService.errors = 'رقم الهاتف أو كلمة المرور غير صحيح'
        }
      })
  }
  toggleForgetPassword(route: String) {
    switch (route) {
      case 'login':
        this._AuthService.AuthService = true
        break;
      case 'forgetPassword':
        this._AuthService.AuthService = false
        break;
    }
  }
    
}
