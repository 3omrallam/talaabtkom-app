import { SectionsModule } from './../sections/sections.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { BlocksModule } from '../blocks/blocks.module';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { ResturantPageComponent } from './resturant-page/resturant-page.component';
import { ResturantsListPageComponent } from './resturants-list-page/resturants-list-page.component';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { ResturantAsidePageComponent } from './resturant-aside-page/resturant-aside-page.component';
import { UserAsidePageComponent } from './user-aside-page/user-aside-page.component';
import { MenuInformationPageComponent } from './menu-information-page/menu-information-page.component';
import { ResturantInformationPageComponent } from './resturant-information-page/resturant-information-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PagesComponent,
    NavbarPageComponent,
    HomePageComponent,
    FooterPageComponent,
    ResturantPageComponent,
    ResturantsListPageComponent,
    FilterPageComponent,
    ResturantAsidePageComponent,
    UserAsidePageComponent,
    MenuInformationPageComponent,
    ResturantInformationPageComponent,
    UserProfilePageComponent,

  ],
  imports: [
    CommonModule,
    BlocksModule,
    SectionsModule,
    RouterModule
  ],
  exports: [
    PagesComponent,
    NavbarPageComponent,
    HomePageComponent,
    FooterPageComponent,
    ResturantPageComponent,
    ResturantsListPageComponent,
    FilterPageComponent,
    ResturantAsidePageComponent,
    UserAsidePageComponent,
    MenuInformationPageComponent,
    ResturantInformationPageComponent,
    UserProfilePageComponent

  ]
})
export class PagesModule { }
