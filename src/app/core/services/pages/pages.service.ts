import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  aboutDescription!:any;
  privacyPolicy!:any;

  constructor(private _http: HttpClient) { }
  getPage(pageId:any) {
    return this._http.get(`${environment.apiUrl}/api/page?id=${pageId}`, {
      headers : {
        lang: localStorage.getItem('currentLang')!
      }
    })
  }
  contactUsForm(data : any){
    return this._http.post<Response>(`${environment.apiUrl}/api/contact_us`, data)
  }
  
}
