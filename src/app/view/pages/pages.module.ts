import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { BlocksModule } from '../blocks/blocks.module';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';



@NgModule({
  declarations: [
    PagesComponent,
    FilterPageComponent,
    NavbarPageComponent,
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    BlocksModule,

  ],
  exports: [
    FilterPageComponent,
    PagesComponent,
    NavbarPageComponent,
    HomePageComponent,
    AboutPageComponent

  ]
})
export class PagesModule { }
