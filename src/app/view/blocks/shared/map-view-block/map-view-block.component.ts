import { AccountService } from 'src/app/core/services/user/account.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapViewService } from 'src/app/core/services/map/map-view.service';

@Component({
  selector: 'app-map-view-block',
  templateUrl: './map-view-block.component.html',
  styleUrls: ['./map-view-block.component.scss']
})
export class MapViewBlockComponent implements OnInit {
  center: google.maps.LatLngLiteral = {lat: 24.774265, lng: 46.738586}
  
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
    // this.getCurrentGeoLocation()
  }

  addLocationFromMap(markerPositions : any){
    console.log(markerPositions);
    
    let data = {
      api_token : this._AccountService.userValue.data.token,
      latitude : markerPositions[0]?.lat,
      longitude: markerPositions[0]?.lng
    }

    this._MapViewService.addUserLocationOnMap(data).subscribe(res => {
      console.log(res);
    })
  }

  getLocationOnMap(){
    this._MapViewService.getUserLocationOnMap(this._AccountService.userValue.data.token).subscribe((res : any) => {
      console.log(res);
      
      this._MapViewService.userLocation = res?.data
      this._MapViewService.userLocation = {
          lat : res.data[0].latitude,
          lng : res.data[0].longitude,
      }
      console.log(this._MapViewService.userLocation);
      
    })
  }

  
  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions = []
    this.markerPositions.push(event.latLng!.toJSON());
    console.log(this.markerPositions);
    this.addLocationFromMap(this.markerPositions)
  }



}
