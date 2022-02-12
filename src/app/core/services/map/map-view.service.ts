import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapViewService {

  userLocation : any
  userAddressDetails : any

  constructor(private _http : HttpClient) { }

  addUserLocationOnMap(data : any) { 
    return this._http.post(`${environment.apiUrl}/api/delivery_addresses`,data)
  }
  getUserLocationOnMap(apiToken : any) { 
    return this._http.get(`${environment.apiUrl}/api/delivery_addresses?api_token=${apiToken}`)
  }

}
