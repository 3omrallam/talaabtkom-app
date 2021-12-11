import { BlocksModule } from '../blocks/blocks.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';
import { MasterContainerLayoutComponent } from './master-container-layout/master-container-layout.component';
import { SideMenuLayoutComponent } from './side-menu-layout/side-menu-layout.component';
import { PagesModule } from '../pages/pages.module';
import { RouterModule} from '@angular/router';
import { NavbarLayoutComponent } from './navbar-layout/navbar-layout.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarService } from './services/navbar.service';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent,
    MasterContainerLayoutComponent,
    SideMenuLayoutComponent,
    NavbarLayoutComponent
  ],
  imports: [
    CommonModule,
    BlocksModule,
    PagesModule,
    RouterModule,
    SharedModule
    
  ],
  exports:[
    LayoutComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent,
    MasterContainerLayoutComponent,
    SideMenuLayoutComponent,
    NavbarLayoutComponent
  ],
  providers: [
    NavbarService
  ]
})
export class LayoutModule { }
