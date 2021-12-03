import { BlocksModule } from './../blocks/blocks.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './sections.component';
import { CoverSectionComponent } from './homeSections/cover-section/cover-section.component';
import { AboutSectionComponent } from './homeSections/about-section/about-section.component';
import { MenuQrcodeSectionComponent } from './homeSections/menu-qrcode-section/menu-qrcode-section.component';
import { ResturantCardsSectionComponent } from './homeSections/resturant-cards-section/resturant-cards-section.component';
import { FeedbackSectionComponent } from './homeSections/feedback-section/feedback-section.component';
import { ContactSectionComponent } from './homeSections/contact-section/contact-section.component';
import { MobileAppSectionComponent } from './homeSections/mobile-app-section/mobile-app-section.component';



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
    
  ],
  imports: [
    CommonModule,
    BlocksModule
  ],
  exports:[
    SectionsComponent,
    CoverSectionComponent,
    AboutSectionComponent,
    MenuQrcodeSectionComponent,
    ResturantCardsSectionComponent,
    FeedbackSectionComponent,
    MobileAppSectionComponent,
    ContactSectionComponent
  ]
})
export class SectionsModule { }
