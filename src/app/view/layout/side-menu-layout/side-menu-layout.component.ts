import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileAsidePageService } from '../../pages/services/user-profile-aside-page.service';

@Component({
  selector: 'app-side-menu-layout',
  templateUrl: './side-menu-layout.component.html',
  styleUrls: ['./side-menu-layout.component.scss']
})
export class SideMenuLayoutComponent implements OnInit {

  constructor(public activeRouter: Router,public _UserProfileAsidePageService: UserProfileAsidePageService) { }

  ngOnInit(): void {
  }

}
