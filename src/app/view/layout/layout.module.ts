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
    BlocksModule,
    PagesModule,
    RouterModule,
    
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
