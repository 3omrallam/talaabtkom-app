import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PagesComponent,
    FilterPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule
  ],
  exports: [
    FilterPageComponent,
    PagesComponent,
  ]
})
export class PagesModule { }
