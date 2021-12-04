import { SectionsModule } from './../sections/sections.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { BlocksModule } from '../blocks/blocks.module';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { ResturantPageComponent } from './resturant-page/resturant-page.component';
import { AsidePageComponent } from './aside-page/aside-page.component';



@NgModule({
  declarations: [
    PagesComponent,
    NavbarPageComponent,
    HomePageComponent,
    FooterPageComponent,
    ResturantPageComponent,
    AsidePageComponent,
    
  ],
  imports: [
    CommonModule,
    BlocksModule,
    SectionsModule
  ],
  exports: [
    PagesComponent,
    NavbarPageComponent,
    HomePageComponent,
    FooterPageComponent,
    ResturantPageComponent,
    AsidePageComponent

  ]
})
export class PagesModule { }
