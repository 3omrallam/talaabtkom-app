import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  nearbyProccess :any
  filtersName :any;

  constructor(private _http : HttpClient) { }
  getUserLocationOnMap(myLat = '',myLon = '',areaLat = '',areaLon = '',receive_method = '') { 
    return this._http.get(`${environment.apiUrl}/api/markets?myLat${myLat}&myLat${myLon}&myLat${areaLat}&myLat${areaLon}&myLat${receive_method}`)
  }
  getMarketFilters(){
    return this._http.get(`${environment.apiUrl}/api/fields`, {
      headers: {
        lang: localStorage.getItem('currentLang')! || 'ar'
      }
    })
  }
}
