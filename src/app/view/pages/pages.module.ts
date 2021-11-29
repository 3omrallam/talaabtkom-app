import { SectionsModule } from './../sections/sections.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { BlocksModule } from '../blocks/blocks.module';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    PagesComponent,
    FilterPageComponent,
    NavbarPageComponent,
    HomePageComponent,
    
  ],
  imports: [
    CommonModule,
    BlocksModule,
    SectionsModule
  ],
  exports: [
    FilterPageComponent,
    PagesComponent,
    NavbarPageComponent,
    HomePageComponent,

  ]
})
export class PagesModule { }
