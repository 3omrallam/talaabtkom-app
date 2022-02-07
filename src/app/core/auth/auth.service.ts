import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToggleBTN : Boolean = true;
  showPassword: boolean = false;
  showNewPaswword:boolean = false
  passwordIcon = 'iCC-Seepassword';
  
  constructor() { }
  // hide password function
  hidePassword() {
    this.showPassword = !this.showPassword
    switch (this.showPassword) {
      case false:
        this.passwordIcon = 'iCC-Seepassword'
        break;
      case true:
        this.passwordIcon = 'iCC-Showpassword'
        break;
    }
  }
}
