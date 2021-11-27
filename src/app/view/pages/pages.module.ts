import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { BlocksModule } from '../blocks/blocks.module';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';



@NgModule({
  declarations: [
    PagesComponent,
    FilterPageComponent,
    NavbarPageComponent
  ],
  imports: [
    CommonModule,
    BlocksModule,

  ],
  exports: [
    FilterPageComponent,
    PagesComponent,
    NavbarPageComponent

  ]
})
export class PagesModule { }
