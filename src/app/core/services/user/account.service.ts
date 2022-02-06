import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user';
import { Response } from '../../models/response';
import { NavbarService } from 'src/app/view/layout/services/navbar.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSubject!: BehaviorSubject<User>;
  public user!: Observable<User>;
  public userName ='';
  public lastName ='';

  public verificationChecked : Number = 0
  public phoneProccess : any
  public registerProccess : any

  constructor(private router: Router, private _http: HttpClient, private _NavbarService : NavbarService) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  checkPhoneNumber(data : Object){
    return this._http.post<Response>(`${environment.apiUrl}/api/checkPhone`, data)
  }

  checkVerificationNumber(data : Object){
    return this._http.post<Response>(`${environment.apiUrl}/api/checkVerification`, data)
  }
  sendRegistrationData(data : Object){
    return this._http.post<Response>(`${environment.apiUrl}/api/register`, data)
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(data : Object) {
    return this._http.post<User>(`${environment.apiUrl}/api/login`, data)
        .pipe(map(user => {
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
  }

  logout() {
      // remove user from local storage and set current user to null
      this._NavbarService.loginToggle = !this._NavbarService.loginToggle
      localStorage.removeItem('user');
      this.userSubject.next(null!);
      this.router.navigate(['/']);
  }
  // Get UserName
  getUserName() {
    this.userName = JSON.parse(localStorage.getItem('user')!).data.name;
    // this.userName = JSON.parse(localStorage.getItem('user')!).data.name.split(' ')[0];
    // this.lastName = JSON.parse(localStorage.getItem('user')!).data.name.substring(this.userName.length).trim();
  }

}
