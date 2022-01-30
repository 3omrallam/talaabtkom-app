import { Routes } from '@angular/router';
import { ChangePasswordSectionComponent } from '../sections/change-password-section/change-password-section.component';
import { PrivacyPolicySectionComponent } from '../sections/privacy-policy-section/privacy-policy-section.component';
import { RecoverPhoneSectionComponent } from '../sections/recover-phone-section/recover-phone-section.component';
import { ResturantCategorySectionComponent } from '../sections/resturant-category-section/resturant-category-section.component';
import { ResturantInformationSectionComponent } from '../sections/resturant-information-section/resturant-information-section.component';
import { ResturantReviewsSectionComponent } from '../sections/resturant-reviews-section/resturant-reviews-section.component';
import { ResturantsGridViewSectionComponent } from '../sections/resturants-grid-view-section/resturants-grid-view-section.component';
import { ResturantsListSectionComponent } from '../sections/resturants-list-section/resturants-list-section.component';
import { UserInfoSectionComponent } from '../sections/user-info-section/user-info-section.component';
import { UserReservationsSectionComponent } from '../sections/user-reservations-section/user-reservations-section.component';

// [Resturant Aside] Route
export const resturantRouter: Routes = [
    { path: '', component: ResturantCategorySectionComponent},
    { path: 'info', component: ResturantInformationSectionComponent},
    { path: 'reviews', component: ResturantReviewsSectionComponent},
]

// [Userprofile Aside] Route
export const userProfileRouter: Routes = [
    { path: '', component: UserInfoSectionComponent},
    { path: 'reservation', component: UserReservationsSectionComponent},
    { path: 'privacy-policy', component: PrivacyPolicySectionComponent},
    { path: 'recover-phone', component: RecoverPhoneSectionComponent},
    { path: 'change-password', component: ChangePasswordSectionComponent},
]
// [Userprofile Aside] Route
export const resturantsView: Routes = [
    { path: '', redirectTo:'list-view',pathMatch:'full'},
    { path: 'list-view', component: ResturantsListSectionComponent },
    { path: 'grid-view', component: ResturantsGridViewSectionComponent },
]
