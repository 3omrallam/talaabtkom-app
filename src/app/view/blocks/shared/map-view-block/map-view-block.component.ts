import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/core/services/user/account.service';
import { Component, OnInit, AfterViewInit, ViewChild, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapViewService } from 'src/app/core/services/map/map-view.service';
import { MarketService } from 'src/app/core/services/market/market.service';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';

@Component({
  selector: 'app-map-view-block',
  templateUrl: './map-view-block.component.html',
  styleUrls: ['./map-view-block.component.scss']
})
export class MapViewBlockComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('map') map! : HTMLElement
  center: google.maps.LatLngLiteral = {lat: 24.774265, lng: 46.738586}
  markers : any = []
  toggleBoolean : Boolean = false
  options: google.maps.MapOptions = {
    center: this.center,
    zoom: 4,
  };

  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor(public _ResturantCardService: ResturantCardService ,public _AccountService: AccountService, public _MapViewService : MapViewService, public _MarketService: MarketService, public ActivatedRoute : ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.getLocationOnMap()
    this.addDefaultMarker()
    this.getLocation()
  }
  
  ngAfterViewInit(): void {
  }
  ngAfterViewChecked(){
  }

  askToSetLocationByBrowser(){
     navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  addLocationFromMap(markerPositions : any){
    this.markers = []
    this._MarketService.nearbyProccess = {
      ...this._MarketService.nearbyProccess,
      latitude : markerPositions[0]?.lat,
      longitude : markerPositions[0]?.lng,
    }
    this.ActivatedRoute?.snapshot?.url[0]?.path != 'check-out' && localStorage.setItem('nearbyMarkets', JSON.stringify(this._MarketService.nearbyProccess))
  }

  getLocationOnMap(){
    this._MapViewService.getUserLocationOnMap(this._AccountService?.userValue?.data?.token).subscribe((res : any) => {
      this.markers.push({
        position: {
          lat: this._ResturantCardService.detectLat,
          lng: this._ResturantCardService.detectLong,
        }
      })
    })
  }

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions = []
    this.markerPositions.push(event.latLng!.toJSON());
    this.addLocationFromMap(this.markerPositions)
    this.addDefaultMarker()
  }

  addDefaultMarker() {
    this.markers.push({
      position: {
        lat: +this.markerPositions[0]?.lat,
        lng: +this.markerPositions[0]?.lng,
      },
      options: { animation: google.maps.Animation.BOUNCE }
    })
    this.getAddressLocation(this.markers[this.markers.length - 1].position.lat, this.markers[this.markers.length - 1].position.lng)    
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this._ResturantCardService.detectLat = position.coords.latitude;
          this._ResturantCardService.detectLong = position.coords.longitude;
          // console.log(this._ResturantCardService.detectLat);
          // console.log(this._ResturantCardService.detectLong);
          this.getAddressLocation(this._ResturantCardService.detectLat, this._ResturantCardService.detectLong)
        }
      },
        (error: any) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }  
  // Get address Location Name using lat and lng
  getAddressLocation(latitude: any, longitude: any) {
    this._MapViewService.geoCoder = new google.maps.Geocoder();
    this._MapViewService.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results: any, status: any) => {
      // console.log(results);
      // console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this._MapViewService.zoom = 12;
          this._MapViewService.address = results[0].formatted_address;
          this._MapViewService.value = this._MapViewService.address.split(",");
          this._MapViewService.count = this._MapViewService.value.length;
          this._MapViewService.country = this._MapViewService.value[0];
          this._MapViewService.state = this._MapViewService.value[this._MapViewService.count - 2];
          this._MapViewService.city = this._MapViewService.value[this._MapViewService.count - 3];
          // console.log(this._MapViewService.value);
          // console.log(this._MapViewService.country);
          // console.log(this._MapViewService.state);
          // console.log(this._MapViewService.city);

        } else {
          console.log('No results found');
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
      }

    });
    // console.log(this._MapViewService.geoCoder);

  }
  


}
