import { SectionsModule } from './../sections/sections.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { BlocksModule } from '../blocks/blocks.module';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { ResturantsListPageComponent } from './resturants-list-page/resturants-list-page.component';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { ResturantAsidePageComponent } from './resturant-aside-page/resturant-aside-page.component';
import { UserAsidePageComponent } from './user-aside-page/user-aside-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { RouterModule } from '@angular/router';
import { ResturantProfilePageComponent } from './resturant-profile-page/resturant-profile-page.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    PagesComponent,
    NavbarPageComponent,
    HomePageComponent,
    FooterPageComponent,
    ResturantsListPageComponent,
    FilterPageComponent,
    ResturantAsidePageComponent,
    UserAsidePageComponent,
    UserProfilePageComponent,
    ResturantProfilePageComponent

  ],
  imports: [
    CommonModule,
    BlocksModule,
    SectionsModule,
    RouterModule,
    CoreModule
  ],
  exports: [
    PagesComponent,
    NavbarPageComponent,
    HomePageComponent,
    FooterPageComponent,
    ResturantsListPageComponent,
    FilterPageComponent,
    ResturantAsidePageComponent,
    UserAsidePageComponent,
    UserProfilePageComponent,
    ResturantProfilePageComponent

  ]
})
export class PagesModule { }
