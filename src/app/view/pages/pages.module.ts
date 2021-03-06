import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { SectionsModule } from './../sections/sections.module';
import { Directive, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { BlocksModule } from '../blocks/blocks.module';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { ResturantsListPageComponent } from './resturants-list-page/resturants-list-page.component';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { ResturantAsidePageComponent } from './resturant-aside-page/resturant-aside-page.component';
import { UserAsidePageComponent } from './user-aside-page/user-aside-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { ResturantProfilePageComponent } from './resturant-profile-page/resturant-profile-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContactusPageComponent } from './contactus-page/contactus-page.component';
import { TrackOrderPageComponent } from './track-order-page/track-order-page.component';
import { RouterModule } from '@angular/router';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';
import { CartMobileResponsivePageComponent } from './cart-mobile-responsive-page/cart-mobile-responsive-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { TranslateModule } from '@ngx-translate/core';
import { MatCheckboxModule } from '@angular/Material/checkbox'
import { GoogleMapsModule } from '@angular/google-maps';

// import { StarRatingModule } from 'angular-star-rating';

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
    PagesComponent,
    NavbarPageComponent,
    HomePageComponent,
    FooterPageComponent,
    ResturantsListPageComponent,
    FilterPageComponent,
    ResturantAsidePageComponent,
    UserAsidePageComponent,
    UserProfilePageComponent,
    ResturantProfilePageComponent,
    ContactusPageComponent,
    CheckoutPageComponent,
    TrackOrderPageComponent,
    PrivacyPolicyPageComponent,
    CartMobileResponsivePageComponent,
    AboutPageComponent,
    ColorDirective,
    

  ],
  imports: [
    CommonModule,
    BlocksModule,
    SectionsModule,
    RouterModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule,
    SharedModule,
    MatTooltipModule,
    TranslateModule,
    MatCheckboxModule,
    GoogleMapsModule,
    
    // StarRatingModule 
    
  ],
  exports: [
    PagesComponent,
    NavbarPageComponent,
    HomePageComponent,
    FooterPageComponent,
    ResturantsListPageComponent,
    FilterPageComponent,
    ResturantAsidePageComponent,
    UserAsidePageComponent,
    UserProfilePageComponent,
    ResturantProfilePageComponent,
    ContactusPageComponent,
    CheckoutPageComponent,
    TrackOrderPageComponent,
    PrivacyPolicyPageComponent,
    CartMobileResponsivePageComponent,
     AboutPageComponent

  ]
})
export class PagesModule { }
