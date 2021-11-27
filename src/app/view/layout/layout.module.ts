import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';
import { MasterContainerLayoutComponent } from './master-container-layout/master-container-layout.component';
import { SideMenuLayoutComponent } from './side-menu-layout/side-menu-layout.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent,
    MasterContainerLayoutComponent,
    SideMenuLayoutComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    LayoutComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent,
    MasterContainerLayoutComponent,
    SideMenuLayoutComponent
  ]
})
export class LayoutModule { }
