import { AccountService } from 'src/app/core/services/user/account.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapViewService } from 'src/app/core/services/map/map-view.service';

@Component({
  selector: 'app-map-view-block',
  templateUrl: './map-view-block.component.html',
  styleUrls: ['./map-view-block.component.scss']
})
export class MapViewBlockComponent implements OnInit, AfterViewInit {
  center: google.maps.LatLngLiteral = {lat: 24.774265, lng: 46.738586}
  markers : any = []
  toggleBoolean : Boolean = false

  
  options: google.maps.MapOptions = {
    center: this.center,
    zoom: 4,
  };

  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor(public _AccountService: AccountService, public _MapViewService : MapViewService) { 
  }

  ngOnInit(): void {
    this.getLocationOnMap()
  }

  ngAfterViewInit(): void {
    
  }

  addLocationFromMap(markerPositions : any){
    this.markers = []

    let data = {
      api_token : this._AccountService?.userValue?.data?.token,
      latitude : markerPositions[0]?.lat,
      longitude : markerPositions[0]?.lng,
    }

    this._MapViewService.addUserLocationOnMap(data).subscribe(res => {
      console.log(res);
      
    }, ()=>{},() => {
      this.getLocationOnMap()
    })
  }

  getLocationOnMap(){
    this._MapViewService.getUserLocationOnMap(this._AccountService?.userValue?.data?.token).subscribe((res : any) => {
      this._MapViewService.userLocation = {
        lat : +res?.data[+res?.data?.length - 1]?.latitude,
        lng : +res?.data[+res?.data?.length - 1]?.longitude,
      }
    }, () => {}, () => this.addMarkerTwo())
  }

  
  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions = []
    this.markerPositions.push(event.latLng!.toJSON());
    this.addLocationFromMap(this.markerPositions)
    this.getLocationOnMap()
  }

  addMarkerTwo() {
    this.markers.push({
      position: {
        lat: +this._MapViewService?.userLocation?.lat,
        lng: +this._MapViewService?.userLocation?.lng,
      },
      options: { animation: google.maps.Animation.BOUNCE }
    })
  }


}
