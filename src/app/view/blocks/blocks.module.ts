import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBlockComponent } from './masterContainerBlocks/search-block/search-block.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { MenuListModalComponent } from './shared/menu-list-modal/menu-list-modal.component';
import { AllReservationsBlockComponent } from './reservations-blocks/all-reservations-block/all-reservations-block.component';
import { CardReviewBlockComponent } from './card-review-block/card-review-block.component';
import { TotalReceiptBlockComponent } from './checkout-blocks/total-receipt-block/total-receipt-block.component';
import { PaymentMethodsBlockComponent } from './checkout-blocks/payment-methods-block/payment-methods-block.component';
import { AddressInfoBlockComponent } from './checkout-blocks/address-info-block/address-info-block.component';
import { CartItemsBlockComponent } from './cart-popup-blocks/cart-items-block/cart-items-block.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { ResturantsHeaderBlockComponent } from './header-blocks/resturants-header-block/resturants-header-block.component';


@NgModule({
  declarations: [
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
    MenuListModalComponent,
    AllReservationsBlockComponent,
    CardReviewBlockComponent,
    TotalReceiptBlockComponent,
    PaymentMethodsBlockComponent,
    AddressInfoBlockComponent,
    CartItemsBlockComponent,
    ButtonBlockComponent,
    ResturantsHeaderBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule
  ],
  exports:[
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
    AllReservationsBlockComponent,
    CardReviewBlockComponent,
    TotalReceiptBlockComponent,
    PaymentMethodsBlockComponent,
    AddressInfoBlockComponent,
    CartItemsBlockComponent,
    ButtonBlockComponent,
    ResturantsHeaderBlockComponent
 
  ]
})
export class BlocksModule { }
