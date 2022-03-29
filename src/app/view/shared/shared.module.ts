import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPopupSharedComponent } from './cart-popup-shared/cart-popup-shared.component';
import { BlocksModule } from '../blocks/blocks.module';
import { NavSearchSharedComponent } from './nav-search-shared/nav-search-shared.component';
import { LoginPopupSharedComponent } from './login-popup-shared/login-popup-shared.component';
import { SectionsModule } from '../sections/sections.module';
import { AddToCartPopupComponent } from './add-to-cart-popup/add-to-cart-popup.component';
import { LottieModule } from 'ngx-lottie';
import { TranslateModule } from '@ngx-translate/core';


export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
} 
@NgModule({
  declarations: [
    CartPopupSharedComponent,
    NavSearchSharedComponent,
    LoginPopupSharedComponent,
    AddToCartPopupComponent,
  ],
  imports: [
    CommonModule,
    BlocksModule,
    SectionsModule,
    RouterModule,
    LottieModule.forRoot({ player: playerFactory }),
    TranslateModule
    
  ],
  exports: [
    CartPopupSharedComponent,
    NavSearchSharedComponent,
    LoginPopupSharedComponent,
  ]
})
export class SharedModule { }
