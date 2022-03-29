import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  userEditProfile!:any
  userProfileDetails!:any
  userName!:any
  constructor(private _http: HttpClient) { }

  updateProfile(data: any) {
    return this._http.post(`${environment.apiUrl}/api/updateData`, data)
  }
}
