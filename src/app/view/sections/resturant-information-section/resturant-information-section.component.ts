       import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MapViewService } from 'src/app/core/services/map/map-view.service';
import { MarketService } from 'src/app/core/services/market/market.service';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-resturant-information-section',
  templateUrl: './resturant-information-section.component.html',
  styleUrls: ['./resturant-information-section.component.scss']
})
export class ResturantInformationSectionComponent implements OnInit {
  htmlString = this._ResturantCardService.singleResturantInfo?.description;
  getIDFromRoute:any
  resturantInforamtion:any
  @ViewChild('map') map!: HTMLElement
  center: google.maps.LatLngLiteral = { lat: 24.774265, lng: 46.738586 }
  markers: any = []
  toggleBoolean: Boolean = false
  options: google.maps.MapOptions = {
    center: this.center,
    zoom: 4,
  };
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];
  
  constructor(public _MapViewService: MapViewService, public activeRouter: ActivatedRoute,public _MarketService: MarketService,public _ResturantCardService: ResturantCardService, public translate: TranslateService) { }
  ngOnInit(): void {
    this.getLocationOnMap()
  }
  getLocationOnMap() {
    this._ResturantCardService?.getResturant(`/${+this._ResturantCardService.resturantID}`).subscribe(res => {
      this.resturantInforamtion = res?.data
      this.center = { lat: this.resturantInforamtion.latitude, lng: this.resturantInforamtion.longitude}
      console.log(this.resturantInforamtion.latitude);
      this.markers.push({
        position: {
          lat: this.resturantInforamtion.latitude,
          lng: this.resturantInforamtion.longitude,
        }
      })
    })
  }
  getResturantID() {
    this.getIDFromRoute = this.activeRouter?.params?.subscribe((route: any) => {
      this._ResturantCardService.resturantID = +route?.id
    })
  }
  ngOnDestroy(): void {
  }
}