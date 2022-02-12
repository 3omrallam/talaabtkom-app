import { Component, AfterViewInit, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapViewService } from 'src/app/core/services/map/map-view.service';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-address-map-popup-shared',
  templateUrl: './address-map-popup-shared.component.html',
  styleUrls: ['./address-map-popup-shared.component.scss']
})
export class AddressMapPopupSharedComponent implements OnInit, AfterViewInit {
  @ViewChild('myButton') myButton! : ElementRef;
  toggleBoolean : Boolean = false

  constructor(public _MapViewService : MapViewService, private _AccountService: AccountService) { }

  ngOnInit(): void { 
    this.getUserAddress()
  }
  ngAfterViewInit(){
      this.triggerClick()
    
  }
  getUserAddress(){
    this._MapViewService.getUserLocationOnMap(this._AccountService.userValue?.data?.token).subscribe((res : any) => {
      this._MapViewService.userAddressDetails = res.data[0]
      console.log(this._MapViewService.userAddressDetails);
      
    })
  }
  ngSubmit(form : FormData){
    this._MapViewService.userLocation = {
      api_token : this._AccountService.userValue?.data?.token,
      ...this._MapViewService.userLocation,
      ...form
    }
    this._MapViewService.addUserLocationOnMap(this._MapViewService.userLocation).subscribe(res => {
      console.log(res);
    })
  }
  navigateToHome(){
    this.toggleBoolean = true
  }
  triggerClick() {
    let el: HTMLElement = this.myButton?.nativeElement as HTMLElement;
    el.click()
  }

}
