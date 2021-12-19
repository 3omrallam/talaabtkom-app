import { SectionsModule } from './../sections/sections.module';
import { SearchBlockComponent } from './masterContainerBlocks/search-block/search-block.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarBlockComponent } from './navbarBlocks/navbar/navbar-block.component';
import { FilterSelectionBlockComponent } from './sideMenuBlocks/filter-selection/filter-selection-block.component';
import { StickerBlockComponent } from './navbarBlocks/sticker-block/sticker-block.component';
import { NavigatorBlockComponent } from './navbarBlocks/navigator-block/navigator-block.component';
import { UserProfileBlockComponent } from './navbarBlocks/user-profile-block/user-profile-block.component';
import { IconComponent } from './shared/icon/icon.component';
import { FooterNavigatorBlockComponent } from './footer-blocks/footer-navigator-block/footer-navigator-block.component';
import { FeedbackCardBlockComponent } from './masterContainerBlocks/feedback-card-block/feedback-card-block.component';
import { RouterModule } from '@angular/router';
import { ResturantGridCardBlockComponent } from './masterContainerBlocks/resturant-grid-card-block/resturant-grid-card-block.component';
import { ResturantListCardBlockComponent } from './masterContainerBlocks/resturant-list-card-block/resturant-list-card-block.component';
import { CoverHeaderBlockComponent } from './headerBlocks/cover-header-block/cover-header-block.component';
import { ResturantStickerBlockComponent } from './sideMenuBlocks/resturant-sticker-block/resturant-sticker-block.component';
import { QrcodeBlockComponent } from './masterContainerBlocks/qrcode-block/qrcode-block.component';
import { MenuListBlockComponent } from './masterContainerBlocks/menu-list-block/menu-list-block.component';
import { SideMenuNavigatorsComponent } from './sideMenuBlocks/side-menu-navigators/side-menu-navigators.component';
import { PageTitleBlockComponent } from './headerBlocks/page-title-block/page-title-block.component';
import { SigninButtonBlockComponent } from './navbarBlocks/signin-button-block/signin-button-block.component';
import { LoginBlockComponent } from './login-block/login-block.component';
import { ButtonBlockComponent } from './button-block/button-block.component';
import { PhoneNumberBlockComponent } from './phone-number-block/phone-number-block.component';
import { VerifyBlockComponent } from './verify-block/verify-block.component';
import { UsernameBlockComponent } from './username-block/username-block.component';
import { SearchBarBlockComponent } from './search-bar-block/search-bar-block.component';
import { ReservationsListBlockComponent } from './reservations-list-block/reservations-list-block.component';
import { ModelsModule } from '../models/models/models.module';
import { CartPopupBlockComponent } from './cart-popup-block/cart-popup-block.component';
import { MenuListModalComponent } from './shared/menu-list-modal/menu-list-modal.component';



@NgModule({
  declarations: [
    NavbarBlockComponent,
    FilterSelectionBlockComponent,
    StickerBlockComponent,
    NavigatorBlockComponent,
    UserProfileBlockComponent,
    IconComponent,
    SearchBlockComponent,
    FooterNavigatorBlockComponent,
    FeedbackCardBlockComponent,
    ResturantGridCardBlockComponent,
    ResturantListCardBlockComponent,
    CoverHeaderBlockComponent,
    ResturantStickerBlockComponent,
    QrcodeBlockComponent,
    MenuListBlockComponent,
    SideMenuNavigatorsComponent,
    PageTitleBlockComponent,
    SigninButtonBlockComponent,
    LoginBlockComponent,
    ButtonBlockComponent,
    PhoneNumberBlockComponent,
    VerifyBlockComponent,
    UsernameBlockComponent,
    SearchBarBlockComponent,
    ReservationsListBlockComponent,
    CartPopupBlockComponent,
    MenuListModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModelsModule,
  ],
  exports:[
    NavbarBlockComponent,
    FilterSelectionBlockComponent,
    StickerBlockComponent,
    NavigatorBlockComponent,
    UserProfileBlockComponent,
    IconComponent,
    SearchBlockComponent,
    FooterNavigatorBlockComponent,
    FeedbackCardBlockComponent,
    ResturantGridCardBlockComponent,
    ResturantListCardBlockComponent,
    CoverHeaderBlockComponent,
    ResturantStickerBlockComponent,
    QrcodeBlockComponent,
    MenuListBlockComponent,
    SideMenuNavigatorsComponent,
    PageTitleBlockComponent,
    SigninButtonBlockComponent,
    LoginBlockComponent,
    ButtonBlockComponent,
    PhoneNumberBlockComponent,
    VerifyBlockComponent,
    UsernameBlockComponent,
    SearchBarBlockComponent,
    ReservationsListBlockComponent,
    CartPopupBlockComponent
  ]
})
export class BlocksModule { }
