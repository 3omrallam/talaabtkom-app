import { BlocksModule } from './../blocks/blocks.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './sections.component';
import { CoverSectionComponent } from './homeSections/cover-section/cover-section.component';
import { AboutSectionComponent } from './homeSections/about-section/about-section.component';
import { MenuQrcodeSectionComponent } from './homeSections/menu-qrcode-section/menu-qrcode-section.component';
import { ResturantCardsSectionComponent } from './resturant-cards-section/resturant-cards-section.component';
import { FeedbackSectionComponent } from './homeSections/feedback-section/feedback-section.component';
import { ContactSectionComponent } from './homeSections/contact-section/contact-section.component';
import { MobileAppSectionComponent } from './homeSections/mobile-app-section/mobile-app-section.component';
import { ResturantInfoSectionComponent } from './resturant-info-section/resturant-info-section.component';
import { UserInfoSectionComponent } from './user-info-section/user-info-section.component';
import { ResturantInformationSectionComponent } from './resturant-information-section/resturant-information-section.component';
import { ResturantCategorySectionComponent } from './resturant-category-section/resturant-category-section.component';
import { UserReservationsSectionComponent } from './user-reservations-section/user-reservations-section.component';
import { LoginSectionComponent } from './authSections/login-section/login-section.component';
import { CreateAccountSectionComponent } from './authSections/create-account-section/create-account-section.component';
import { PrivacyPolicySectionComponent } from './privacy-policy-section/privacy-policy-section.component';
import { ResturantsListSectionComponent } from './resturants-list-section/resturants-list-section.component';
import { RecoverPhoneSectionComponent } from './recover-phone-section/recover-phone-section.component';
import { ChangePasswordSectionComponent } from './change-password-section/change-password-section.component';
import { ResturantReviewsSectionComponent } from './resturant-reviews-section/resturant-reviews-section.component';
import { ContactusSectionComponent } from './contactus-section/contactus-section.component';
import { CheckoutSectionComponent } from './checkout-section/checkout-section.component';
import { LottieModule } from 'ngx-lottie';
import { ResturantsGridViewSectionComponent } from './resturants-grid-view-section/resturants-grid-view-section.component';
import { TrackOrderSectionComponent } from './track-order-section/track-order-section.component';
import { UserFavouriteItemsSectionComponent } from './user-favourite-items-section/user-favourite-items-section.component';
import { MyReviewsSectionComponent } from './my-reviews-section/my-reviews-section.component';
import { NotificationsSectionComponent } from './notifications-section/notifications-section.component';
import { RouterModule } from '@angular/router';

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
} 


@NgModule({
  declarations: [
    SectionsComponent,
    CoverSectionComponent,
    AboutSectionComponent,
    MenuQrcodeSectionComponent,
    ResturantCardsSectionComponent,
    FeedbackSectionComponent,
    ContactSectionComponent,
    MobileAppSectionComponent,
    ResturantInfoSectionComponent,
    UserInfoSectionComponent,
    ResturantInformationSectionComponent,
    ResturantCategorySectionComponent,
    UserReservationsSectionComponent,
    LoginSectionComponent,
    CreateAccountSectionComponent,
    PrivacyPolicySectionComponent,
    ResturantsListSectionComponent,
    RecoverPhoneSectionComponent,
    ChangePasswordSectionComponent,
    ResturantReviewsSectionComponent,
    ContactusSectionComponent,
    CheckoutSectionComponent,
    ResturantsGridViewSectionComponent,
    TrackOrderSectionComponent,
    UserFavouriteItemsSectionComponent,
    MyReviewsSectionComponent,
    NotificationsSectionComponent,
    
  ],
  imports: [
    CommonModule,
    BlocksModule,
    RouterModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  exports:[
    SectionsComponent,
    CoverSectionComponent,
    AboutSectionComponent,
    MenuQrcodeSectionComponent,
    ResturantCardsSectionComponent,
    FeedbackSectionComponent,
    MobileAppSectionComponent,
    ContactSectionComponent,
    ResturantInfoSectionComponent,
    UserInfoSectionComponent,
    ResturantInformationSectionComponent,
    ResturantCategorySectionComponent,
    UserReservationsSectionComponent,
    LoginSectionComponent,
    CreateAccountSectionComponent,
    PrivacyPolicySectionComponent,
    ResturantsListSectionComponent,
    RecoverPhoneSectionComponent,
    ChangePasswordSectionComponent,
    ResturantReviewsSectionComponent,
    ContactusSectionComponent,
    CheckoutSectionComponent,
    ResturantsGridViewSectionComponent,
    TrackOrderSectionComponent,
    UserFavouriteItemsSectionComponent,
    MyReviewsSectionComponent,
    NotificationsSectionComponent
  ]
})
export class SectionsModule { }
