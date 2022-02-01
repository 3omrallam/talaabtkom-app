import { ResturantCard, SingleCard } from 'src/app/core/models/resturantCard';
import { map, share, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class ResturantCardService {
  
  private cacheResturantToCheck$!: Observable<Array<SingleCard>>;

  constructor(private _http : HttpClient) { }

  // GET APIS # 
    private getResturant(query:String){ return this._http.get<ResturantCard>(`${environment.apiUrl}/api/markets${query}`).pipe(map(response => response.data))}
  
  // Controllers #
    getResturantData(query : String) {
      if (!this.cacheResturantToCheck$) this.cacheResturantToCheck$ = this.getResturant(query).pipe(shareReplay());
      return this.cacheResturantToCheck$;
    }

}
