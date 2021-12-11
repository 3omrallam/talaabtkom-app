import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPopupSharedComponent } from './cart-popup-shared/cart-popup-shared.component';
import { BlocksModule } from '../blocks/blocks.module';
import { NavSearchSharedComponent } from './nav-search-shared/nav-search-shared.component';



@NgModule({
  declarations: [
    CartPopupSharedComponent,
    NavSearchSharedComponent
  ],
  imports: [
    CommonModule,
    BlocksModule
  ],
  exports: [
    CartPopupSharedComponent,
    NavSearchSharedComponent
  ]
})
export class SharedModule { }
