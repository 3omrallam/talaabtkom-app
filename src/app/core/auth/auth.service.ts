import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToggleBTN : Boolean = true;
  AuthService:boolean = true;
  showPassword: boolean = false;
  showConfirmPassword:boolean = false
  showNewPaswword:boolean = false
  hideCurrentPassord:boolean = false;
  passwordIcon = 'iCC-Seepassword';
  confirmPasswordIcon = 'iCC-Seepassword';
  currentPasswordIcon = 'iCC-Seepassword';
  
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
  hideConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword
    switch (this.showConfirmPassword) {
      case false:
        this.confirmPasswordIcon = 'iCC-Seepassword'
        break;
      case true:
        this.confirmPasswordIcon = 'iCC-Showpassword'
        break;
    }
  }
  hideCurrentPassword() {
    this.hideCurrentPassord = !this.hideCurrentPassord
    switch (this.hideCurrentPassord) {
      case false:
        this.currentPasswordIcon = 'iCC-Seepassword'
        break;
      case true:
        this.currentPasswordIcon = 'iCC-Showpassword'
        break;
    }
  }
  // For Making input Numbers Only
  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
