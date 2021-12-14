import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login-popup-shared',
  templateUrl: './login-popup-shared.component.html',
  styleUrls: ['./login-popup-shared.component.scss']
})
export class LoginPopupSharedComponent implements OnInit {

  constructor(public _AuthService: AuthService) { }

  ngOnInit(): void {
  }
  toggleAuthBTN(route: String) {
    switch (route) {
      case 'login':
        this._AuthService.authToggleBTN = true
        break;
      case 'register':
        this._AuthService.authToggleBTN = false
        break;
    }
  }


}
