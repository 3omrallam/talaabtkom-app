import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-username-block',
  templateUrl: './username-block.component.html',
  styleUrls: ['./username-block.component.scss']
})
export class UsernameBlockComponent implements OnInit {

  constructor(private _AccountService : AccountService , public _AuthService : AuthService) { }

  ngOnInit(): void {
  }
  ngSubmit(formValue : any){
    console.log(formValue);
    this._AccountService.registerProccess = {
      ...this._AccountService.registerProccess,
      ...formValue
    }
    this._AccountService.sendRegistrationData(this._AccountService.registerProccess).subscribe(res => {
      if (res.success) {
        this._AuthService.authToggleBTN = true
      }
    })
    
  }

}
