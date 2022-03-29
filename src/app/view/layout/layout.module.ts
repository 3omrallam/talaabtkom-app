import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlocksModule } from '../blocks/blocks.module';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';
import { MasterContainerLayoutComponent } from './master-container-layout/master-container-layout.component';
import { SideMenuLayoutComponent } from './side-menu-layout/side-menu-layout.component';
import { PagesModule } from '../pages/pages.module';
import { NavbarLayoutComponent } from './navbar-layout/navbar-layout.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarService } from './services/navbar.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideNavMobileResponsiveLayoutComponent } from './side-nav-mobile-responsive-layout/side-nav-mobile-responsive-layout.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent,
    MasterContainerLayoutComponent,
    SideMenuLayoutComponent,
    NavbarLayoutComponent,
    SideNavMobileResponsiveLayoutComponent
  ],
  imports: [
    CommonModule,
    BlocksModule,
    PagesModule,
    RouterModule,
    SharedModule,
    BrowserAnimationsModule,
    TranslateModule
    
  ],
  exports:[
    LayoutComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent,
    MasterContainerLayoutComponent,
    SideMenuLayoutComponent,
    NavbarLayoutComponent,
    SideNavMobileResponsiveLayoutComponent
  ],
  providers: [
    NavbarService
  ]
})
export class LayoutModule { }
