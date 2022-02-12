import { ResturantCard, SingleCard } from 'src/app/core/models/resturantCard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable()
export class ResturantCardService {
  resturantCards! : ResturantCard
  singleResturantInfo : any
  singleResturantCategories! : any
  resturantID! : Number

  constructor(private _http: HttpClient) { }

  // GET APIS # 
  getResturant(query: String) { 
    return this._http.get<ResturantCard>(`${environment.apiUrl}/api/markets${query}`)
  }

  getResturantProducts(productID: Number, apiToken : String) { 
    return this._http.get(`${environment.apiUrl}/api/category/products?market_id=${productID}&api_token=${apiToken}`)
  }
  
  getResturantCategories(productID: Number) { 
    return this._http.get<ResturantCard>(`${environment.apiUrl}/api/categories?market_id=${productID}`)
  }

}
