import { Component, OnInit } from '@angular/core';
import { UserProfileAsidePageService } from '../services/user-profile-aside-page.service';

@Component({
  selector: 'app-user-aside-page',
  templateUrl: './user-aside-page.component.html',
  styleUrls: ['./user-aside-page.component.scss']
})
export class UserAsidePageComponent implements OnInit {

  constructor(public _UserProfileAsidePageService: UserProfileAsidePageService) { }
  
  ngOnInit(): void {
    
  }

}
