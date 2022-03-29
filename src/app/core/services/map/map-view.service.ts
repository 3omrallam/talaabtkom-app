import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapViewService {
  userLocation : any
  userLocationInHome : any
  userAddressDetails : any

  searchINPID : any
  public geoCoder: any;
  latitude: any;
  longitude: any;
  value:any
  zoom: any;
  address: any;
  count: any;
  firstCount: any;
  country: any;
  FirstCountry: any;
  state: any;
  city: any
  FirstCity: any


  constructor(private _http : HttpClient) { }

  addUserLocationOnMap(data : any) { 
    return this._http.post(`${environment.apiUrl}/api/delivery_addresses`,data)
  }
  updateUserLocationOnMap(address_id : Number, data : any) { 
    return this._http.patch(`${environment.apiUrl}/api/delivery_addresses/${address_id}`,data)
  }
  postOldAddressAsDefault(address_id: Number, is_default: any, api_token:any) { 
    return this._http.patch(`${environment.apiUrl}/api/delivery_addresses/${address_id}?is_default=${is_default}&api_token=${api_token}`,{is_default , api_token })
  }
  getUserLocationOnMap(apiToken : any = '') {
    return this._http.get(`${environment.apiUrl}/api/delivery_addresses?api_token=${apiToken}`)
  }
  getTrackingLocationOnMap(orderID : Number, apiToken : any) { 
    return this._http.get(`${environment.apiUrl}/api/tracking/${orderID}?api_token=${apiToken}`)
  } 
  // patch update user true
  // updateUserLocationOnMap$(address_id: Number, area: any, api_token: any, street: any, building_num: any, flat_num: any, landmark: any, type: any, latitude: any, longitude: any, is_default: any) {
  //   return this._http.patch(`${environment.apiUrl}/api/delivery_addresses/${address_id}/api_token=${api_token}&area=${area}&street=${street}&building_num=${building_num}&flat_num=${flat_num}&landmark=${landmark}&type=${type}&latitude=${latitude}&longitude=${longitude}&is_default=${is_default}`
  //     , { api_token, area, street, building_num, flat_num, landmark, type, latitude, longitude, is_default })
  // }
  

}
