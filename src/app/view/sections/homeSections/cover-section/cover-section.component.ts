import { AccountService } from './../../../../core/services/user/account.service';
import { Component, OnInit } from '@angular/core';
import { MapViewService } from 'src/app/core/services/map/map-view.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cover-section',
  templateUrl: './cover-section.component.html',
  styleUrls: ['./cover-section.component.scss']
})
export class CoverSectionComponent implements OnInit {

  constructor(public _MapViewService: MapViewService, private _AccountService: AccountService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.getUserLocationOnMap()
  }

  getUserLocationOnMap(){
    this._MapViewService.getUserLocationOnMap(this._AccountService?.userValue?.data?.token).subscribe((res : any) => {
      this._MapViewService.userLocation = res.data
    })
  }

}
