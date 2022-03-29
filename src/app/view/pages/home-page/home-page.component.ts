import { Component, OnInit } from '@angular/core';
import { OrderProccessService } from 'src/app/core/services/orderProccess/order-proccess.service';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
@Component({
  selector: 'app-home-page',
  templateUrl:'./home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {



  constructor(public _ResturantCardService: ResturantCardService, public _OrderProccessService: OrderProccessService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.getLocation()
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this._ResturantCardService.detectLat = position.coords.latitude;
          this._ResturantCardService.detectLong = position.coords.longitude;
          console.log(this._ResturantCardService.detectLat);
          console.log(this._ResturantCardService.detectLong);
        }
      },
        (error: any) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }  

   
//   initMap(): void {
//   const map = new google.maps.Map(
//     document.getElementById("map") as HTMLElement,
//     {
//       zoom: 8,
//       center: { lat: 40.731, lng: -73.997 },
//     }
//   );
//   const geocoder = new google.maps.Geocoder();
//   const infowindow = new google.maps.InfoWindow();

//   (document.getElementById("submit") as HTMLElement).addEventListener(
//     "click",
//     () => {
//       this.geocodeLatLng(geocoder, map, infowindow);
//     }
//   );
// }

//  geocodeLatLng(
//   geocoder: google.maps.Geocoder,
//   map: google.maps.Map,
//   infowindow: google.maps.InfoWindow
// ) {
//   const input = (document.getElementById("latlng") as HTMLInputElement).value;
//   const latlngStr = input.split(",", 2);
//   const latlng = {
//     lat: parseFloat(latlngStr[0]),
//     lng: parseFloat(latlngStr[1]),
//   };

//   geocoder
//     .geocode({ location: latlng })
//     .then((response) => {
//       if (response.results[0]) {
//         map.setZoom(11);

//         const marker = new google.maps.Marker({
//           position: latlng,
//           map: map,
//         });

//         infowindow.setContent(response.results[0].formatted_address);
//         infowindow.open(map, marker);
//       } else {
//         window.alert("No results found");
//       }
//     })
//     .catch((e) => window.alert("Geocoder failed due to: " + e));
// }

}

