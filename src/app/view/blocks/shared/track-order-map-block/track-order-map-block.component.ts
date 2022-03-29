import { AccountService } from 'src/app/core/services/user/account.service';
import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapViewService } from 'src/app/core/services/map/map-view.service';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-track-order-map-block',
  templateUrl: './track-order-map-block.component.html',
  styleUrls: ['./track-order-map-block.component.scss']
})
export class TrackOrderMapBlockComponent implements OnInit, OnDestroy {
  
  center: google.maps.LatLngLiteral = {lat: 24.774265, lng: 46.738586}
  markerPositions: google.maps.LatLngLiteral[] = [];  
  options: google.maps.MapOptions = {
    center: this.center,
    zoom: 4,
  };
  

  constructor(public _OrderProccessService: OrderProccessService,public _AccountService: AccountService, public _MapViewService : MapViewService, public ActiveRouter: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.getTrackingLocationOnMap()
    setInterval(()=>{
      this.getTrackingLocationOnMap()
    },20000)
    
  }

  getTrackingLocationOnMap(){
    let orderID = JSON.parse(localStorage.getItem('orderID')!);
    
    this._MapViewService.getTrackingLocationOnMap(+orderID, this._AccountService?.userValue?.data?.token).subscribe((res : any) => {
      // console.log(res);
      
      this.markerPositions = [
        {
          lat : res?.data?.user_latitude,
          lng : res?.data?.user_longitude
        },
        {
          lat : +res?.data?.order_status_id === 4 && +res?.data?.driver_latitude,
          lng : +res?.data?.order_status_id === 4 && +res?.data?.driver_longitude
        },
      ]
      this._OrderProccessService.trackingOrderDetails = res
    }, () => {}, () => {})
  }

  ngOnDestroy(): void {
    return clearInterval()
    
  }
}