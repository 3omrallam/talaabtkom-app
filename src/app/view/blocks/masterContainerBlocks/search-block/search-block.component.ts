import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { ResturantCard } from 'src/app/core/models/resturantsList';
import { MapViewService } from 'src/app/core/services/map/map-view.service';
import { TranslateService } from '@ngx-translate/core';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { AccountService } from 'src/app/core/services/user/account.service';
import { MarketService } from 'src/app/core/services/market/market.service';

@Component({
  selector: 'app-search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['./search-block.component.scss']
})
export class SearchBlockComponent implements OnInit, AfterViewInit {
  selectedOption:any
  @Input() userAddressList! : any
  userArea:any;
  userStreet:any = ''
  displayList:any = false
  selectedAddress: any;
  @ViewChild('searchINP') searchINP! : HTMLElement



  constructor(public _MarketService: MarketService,public _AccountService: AccountService,public _ResturantCardService: ResturantCardService, private _MapViewService: MapViewService, public translate: TranslateService, public _OrderProccessService: OrderProccessService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    // this._MapViewService.searchINPID = this.searchINP
    // console.log('x' , this._MapViewService.searchINPID);
    this.getUserAddress()
  }
  getUserAddress() {
    this._OrderProccessService.getUserAddress(this._AccountService?.userValue?.data?.token).subscribe((res : any) => {
      this._OrderProccessService.userAddress = res.data
      if (JSON.parse(localStorage.getItem('nearbyMarkets')!).is_default == 1)
      {
        this._OrderProccessService.UserArea = res.data[0].area
        this._OrderProccessService.userStreet = res.data[0].street
      }else{
        this._OrderProccessService.UserArea = res.data[res.data.length-1].area
        this._OrderProccessService.userStreet = res.data[res.data.length-1].street
      }
      // console.log(this._OrderProccessService.userAddress);
      // console.log(this._OrderProccessService.userStreet);
      
    })
  }
  // Put old Address Information in Search
  AddressInformation(val:any){
    // console.log(val);
    this.selectedAddress = val.area + '-' + val.street;
    this._OrderProccessService.UserArea = val.area;
    this._OrderProccessService.userStreet = val.street
    this._MapViewService.postOldAddressAsDefault(val.id, 1, this._AccountService?.userValue?.data?.token).subscribe(res =>{
      // console.log(res);
      this.getUserAddress()
    })
    this.displayList = !this.displayList
    this._MarketService.nearbyProccess = {
      is_default: JSON.parse(localStorage.getItem('nearbyMarkets')!).is_default,
      latitude: val.latitude,
      longitude: val.longitude,
    }
    // console.log(this._MarketService.nearbyProccess);
    
    localStorage.setItem('nearbyMarkets', JSON.stringify(this._MarketService.nearbyProccess))
     
  }
 
  
 
  

 
}