import { MatSnackBarModule} from '@angular/material/snack-bar';
import { SearchBlockComponent } from './masterContainerBlocks/search-block/search-block.component';
import { Directive, Input, NgModule } from '@angular/core';
import { FilterSelectionBlockComponent } from './sideMenuBlocks/filter-selection/filter-selection-block.component';
import { StickerBlockComponent } from './navbarBlocks/sticker-block/sticker-block.component';
import { NavigatorBlockComponent } from './navbarBlocks/navigator-block/navigator-block.component';
import { UserProfileBlockComponent } from './navbarBlocks/user-profile-block/user-profile-block.component';
import { FooterNavigatorBlockComponent } from './footer-blocks/footer-navigator-block/footer-navigator-block.component';
import { FeedbackCardBlockComponent } from './masterContainerBlocks/feedback-card-block/feedback-card-block.component';
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
import { DeliveryInfoBlockComponent } from './track-order-blocks/delivery-info-block/delivery-info-block.component';
import { NotificationCardBlockComponent } from './notification-card-block/notification-card-block.component';
import { MapViewBlockComponent } from './shared/map-view-block/map-view-block.component';
import { AddressMapPopupSharedComponent } from './shared/address-map-popup-shared/address-map-popup-shared.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconComponent } from './shared/icon/icon.component';
import { FormAddressPopupBlockComponent } from './form-address-popup-block/form-address-popup-block.component';
import { TrackOrderMapBlockComponent } from './shared/track-order-map-block/track-order-map-block.component';
import { MobileNumberForgetpasswordBlockComponent } from './forget-password-blocks/mobile-number-forgetpassword-block/mobile-number-forgetpassword-block.component';
import { SendOtpForgetpasswordBlockComponent } from './forget-password-blocks/send-otp-forgetpassword-block/send-otp-forgetpassword-block.component';
import { ConfirmPasswordComponent } from './forget-password-blocks/confirm-password/confirm-password.component';
import { CheckOutPopupSharedComponent } from './shared/check-out-popup-shared/check-out-popup-shared.component';
import { RatingPopupSharedComponent } from './shared/rating-popup-shared/rating-popup-shared.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { AddressMapPopupComponent } from './shared/address-map-popup/address-map-popup.component';
@Directive({
  selector: "[color]"
})
export class ColorDirective {
  @Input('color')
  color!: string;
  
  ngOnInit() {
    console.log(this.color);
  }
}
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
    ResturantsHeaderBlockComponent,
    DeliveryInfoBlockComponent,
    NotificationCardBlockComponent,
    MapViewBlockComponent,
    AddressMapPopupSharedComponent,
    FormAddressPopupBlockComponent,
    TrackOrderMapBlockComponent,
    MobileNumberForgetpasswordBlockComponent,
    SendOtpForgetpasswordBlockComponent,
    ConfirmPasswordComponent,
    CheckOutPopupSharedComponent,
    RatingPopupSharedComponent,
    ColorDirective,
    AddressMapPopupComponent
    
    
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule,
    GoogleMapsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    TranslateModule
   
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
    ResturantsHeaderBlockComponent,
    DeliveryInfoBlockComponent,
    NotificationCardBlockComponent,
    MapViewBlockComponent,
    AddressMapPopupSharedComponent,
    FormAddressPopupBlockComponent,
    TrackOrderMapBlockComponent,
    MenuListModalComponent,
    MobileNumberForgetpasswordBlockComponent,
    SendOtpForgetpasswordBlockComponent,
    ConfirmPasswordComponent,
    CheckOutPopupSharedComponent,
    RatingPopupSharedComponent,
    AddressMapPopupComponent
 
  ]
})
export class BlocksModule { }
