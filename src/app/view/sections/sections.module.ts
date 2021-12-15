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
import { ResturantMenuSectionComponent } from './resturant-menu-section/resturant-menu-section.component';
import { UserInfoSectionComponent } from './user-info-section/user-info-section.component';
import { ResturantInformationSectionComponent } from './resturant-information-section/resturant-information-section.component';
import { ResturantCategorySectionComponent } from './resturant-category-section/resturant-category-section.component';
import { UserReservationsSectionComponent } from './user-reservations-section/user-reservations-section.component';
import { LoginSectionComponent } from './authSections/login-section/login-section.component';
import { CreateAccountSectionComponent } from './authSections/create-account-section/create-account-section.component';
import { PrivacyPolicySectionComponent } from './privacy-policy-section/privacy-policy-section.component';
import { ModelsModule } from '../models/models/models.module';



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
    ResturantMenuSectionComponent,
    UserInfoSectionComponent,
    ResturantInformationSectionComponent,
    ResturantCategorySectionComponent,
    UserReservationsSectionComponent,
    LoginSectionComponent,
    CreateAccountSectionComponent,
    PrivacyPolicySectionComponent,
    
  ],
  imports: [
    CommonModule,
    BlocksModule,
    ModelsModule
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
    ResturantMenuSectionComponent,
    UserInfoSectionComponent,
    ResturantInformationSectionComponent,
    ResturantCategorySectionComponent,
    UserReservationsSectionComponent,
    LoginSectionComponent,
    CreateAccountSectionComponent,
    PrivacyPolicySectionComponent
  ]
})
export class SectionsModule { }
