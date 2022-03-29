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
  productID! :Number
  getProductDetails!:any
  getResturantName!:any;
  favourieProductDetails!:any
  placeholder:boolean = true
  searchCategoryInputVal:any
  fields: string[] = [];
  isChecked:boolean = false;
  deliveryfree:boolean = false;
  normal_order_by:boolean = false;
  order_by_type:any;
  rate_order_by:boolean = false;
  detectLat!:any;
  detectLong!:any;

  constructor(private _http: HttpClient) { }
  
  
  // Get UserName
  get getNearbyMarketsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('nearbyMarkets')!);
  }

  // GET APIS # 
  getResturant(query: any) { 
    return this._http.get<ResturantCard>(`${environment.apiUrl}/api/markets${query}` , {
      headers: {
        lang: localStorage.getItem('currentLang')!
      }
    })
  }
  getResturantProfile(resturantID:Number){
    return this._http.get(`${environment.apiUrl}/api/markets/${resturantID}` , {
      headers: {
        lang: localStorage.getItem('currentLang')!
      }
    })
  }
  getNearbyResturant(myLat: String, myLng: String, areaLat: string, areaLon:string , receiveMethod: String, searchVal: any = '', fields: any = [], delivery_free: boolean, normal_order_by: boolean, order_by_type: any = '', rate_order_by:boolean) { 
    return this._http.get<ResturantCard>(`${environment.apiUrl}/api/markets?myLat=${myLat}&myLon=${myLng}&areaLat=${areaLat}&areaLon=${areaLon}&receive_method=${receiveMethod}&name=${searchVal}&fileds=${fields}&delivery_free=${delivery_free}&normal_order_by=${normal_order_by}&order_by_type=${order_by_type}&rate_order_by=${rate_order_by}` ,{
      headers: {
        lang: localStorage.getItem('currentLang')!
      }
    })
  }
  getResturantProducts(productID: Number, apiToken : String) { 
    return this._http.get(`${environment.apiUrl}/api/category/products?market_id=${productID}&api_token=${apiToken}` , {
      headers: {
        lang: localStorage.getItem('currentLang')!
      }
    })
  }
  getResturantCategories(productID: Number) { 
    return this._http.get<ResturantCard>(`${environment.apiUrl}/api/categories?market_id=${productID}` , {
      headers: {
        lang: localStorage.getItem('currentLang')!
      }
    })
  }
  getProductOptions(productID: Number){
    return this._http.get<ResturantCard>(`${environment.apiUrl}/api/products/${productID}` ,  {
      headers: {
        lang: localStorage.getItem('currentLang')!
      }
    })
  }
  addProductToFavourite(product_id:Number , apiToken:any ){
    return this._http.post(`${environment.apiUrl}/api/favorites?api_token=${apiToken}`, { apiToken, product_id})
  }
  searchProduct(market_id: Number, apiToken: any, name:any){
    return this._http.post(`${environment.apiUrl}/api/products?market_id=${market_id}&api_token=${apiToken}`, { apiToken, market_id, name})
  }
  getLiseFavourite(apiToken: any){
    return this._http.get(`${environment.apiUrl}/api/favorites?api_token=${apiToken}` , {
      headers: {
        lang: localStorage.getItem('currentLang')!
      }
    })
  }
  getProductBySearch(name : any, market_id : any, apiToken: any){
    return this._http.get(`${environment.apiUrl}/api/products?market_id=${market_id}&api_token=${apiToken}&name=${name}` , {
      headers: {
        lang: localStorage.getItem('currentLang')!
      }
    })
  }
  getFavourite(apiToken: any){
    return this._http.get(`${environment.apiUrl}/api/favorites?api_token=${apiToken}` , {
      headers: {
        lang: localStorage.getItem('currentLang')!
      }
    })
  }

}
