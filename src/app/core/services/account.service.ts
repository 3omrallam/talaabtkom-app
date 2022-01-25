import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSubject!: BehaviorSubject<User>;
  public user!: Observable<User>;

  public verificationChecked : any = 0
  public phoneProccess : any
  public registerProccess : any

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  checkPhoneNumber(data : Object){
    return this.http.post<Response>(`${environment.apiUrl}/api/checkPhone`, data)
  }

  checkVerificationNumber(data : Object){
    return this.http.post<Response>(`${environment.apiUrl}/api/checkVerification`, data)
  }
  sendRegistrationData(data : Object){
    return this.http.post<Response>(`${environment.apiUrl}/api/register`, data)
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(data : Object) {
    return this.http.post<User>(`${environment.apiUrl}/api/login`, data)
        .pipe(map(user => {
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
  }

  logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('user');
      this.userSubject.next(null!);
      this.router.navigate(['/']);
  }

}
