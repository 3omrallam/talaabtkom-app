// import { AuthGuard } from './../../core/helpers/auth.guard';
import { CheckoutPageComponent } from './../pages/checkout-page/checkout-page.component';
import { Routes} from '@angular/router';
import { ContactusPageComponent } from '../pages/contactus-page/contactus-page.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { resturantRouter, resturantsView, userProfileRouter } from '../pages/page-router.module';
import { ResturantProfilePageComponent } from '../pages/resturant-profile-page/resturant-profile-page.component';
import { ResturantsListPageComponent } from '../pages/resturants-list-page/resturants-list-page.component';
import { UserProfilePageComponent } from '../pages/user-profile-page/user-profile-page.component';
import { AuthGuard } from 'src/app/core/helpers/auth.guard';
import { TrackOrderPageComponent } from '../pages/track-order-page/track-order-page.component';
import { PrivacyPolicyPageComponent } from '../pages/privacy-policy-page/privacy-policy-page.component';
import { CartMobileResponsivePageComponent } from '../pages/cart-mobile-responsive-page/cart-mobile-responsive-page.component';
import { AboutPageComponent } from '../pages/about-page/about-page.component';

export const LayoutRouterModule: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'resturants', component: ResturantsListPageComponent, children: [...resturantsView]},
  { path: 'contact-us', component: ContactusPageComponent},
  { path: 'privacy-policy', component: PrivacyPolicyPageComponent},
  { path: 'cart', component: CartMobileResponsivePageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'check-out', component: CheckoutPageComponent},
  { path: 'track-order', component: TrackOrderPageComponent},
  { path: 'userProfile', component: UserProfilePageComponent , children: [...userProfileRouter]},
  { path: 'resturant-profile/:id',component: ResturantProfilePageComponent, children: [...resturantRouter]},
]

