import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'talbaatkom';
  constructor(public activeRouter: Router){}

  classCondition(){
    return this.activeRouter.url !== '/' && this.activeRouter.url !== '/resturant-profile/1';
  }
  contact(){
    return this.activeRouter.url == '/resturant-profile/1';
  }
}
