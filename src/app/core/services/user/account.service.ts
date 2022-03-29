import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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
  public userImage!:any;
  public verificationChecked : Number = 0
  public ForgetPasswordChecked : Number = 0
  public phoneProccess : any
  public phoneForgetPasswordProcess :any
  public registerProccess : any
  public forgetPasswordProcess :any
  public getUserAddress!: any;
  public userData!: any;
  public userId!:any
  public errors!:any
  mobileNumber!:any;


  constructor(private router: Router, private _http: HttpClient, private _NavbarService : NavbarService) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
    
    
  }

  checkPhoneNumber(data : any){
    return this._http.post<Response>(`${environment.apiUrl}/api/checkPhone`,  data)
  }
  checkPhoneNumberForgetPassword(data : Object){
    return this._http.post<Response>(`${environment.apiUrl}/api/forget_password`, data)
  }
  checkVerificationNumber(data : Object){
    return this._http.post<Response>(`${environment.apiUrl}/api/checkVerification`, data)
  }
  changePassword(apiToken:any , data : any){
    return this._http.post<Response>(`${environment.apiUrl}/api/changePassword?api_token=${apiToken}`, data)
  }
  sendRegistrationData(data : Object){
    return this._http.post<Response>(`${environment.apiUrl}/api/register`, data)
  }
  UpdatePassword(data : Object){
    return this._http.post<Response>(`${environment.apiUrl}/api/update_password`, data)
  }
  
  getUserDeliveryAddress(apiToken : String){
    return this._http.get(`${environment.apiUrl}/api/delivery_addresses?api_token=${apiToken}`)
  }

  getUserData(apiToken : String){
    return this._http.get(`${environment.apiUrl}/api/user?api_token=${apiToken}`)
  }


  public get userValue(): User {
    return this.userSubject.value;
  }

  login(data : Object) {
    return this._http.post<User>(`${environment.apiUrl}/api/login`, data)
        .pipe(map(user => {
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            this.router.navigate(['/']);
            return user;
        }));
  }

  logout() {
      // remove user from local storage and set current user to null
      this._NavbarService.loginToggle = !this._NavbarService.loginToggle
      localStorage.removeItem('user');
      localStorage.removeItem('nearbyMarkets');
      localStorage.removeItem('orderID');
      this.userSubject.next(null!);
      this.router.navigate(['/']);
      !this._NavbarService.loginToggle
  }
  // Get UserName
  getUserName() {
    this.userName = JSON.parse(localStorage.getItem('user')!).data.name;
  }

}
