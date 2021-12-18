import { Routes } from '@angular/router';
import { PrivacyPolicySectionComponent } from '../sections/privacy-policy-section/privacy-policy-section.component';
import { RecoverPhoneSectionComponent } from '../sections/recover-phone-section/recover-phone-section.component';
import { ResturantCategorySectionComponent } from '../sections/resturant-category-section/resturant-category-section.component';
import { ResturantInformationSectionComponent } from '../sections/resturant-information-section/resturant-information-section.component';
import { UserInfoSectionComponent } from '../sections/user-info-section/user-info-section.component';
import { UserReservationsSectionComponent } from '../sections/user-reservations-section/user-reservations-section.component';

// [Resturant Aside] Route
export const resturantRouter: Routes = [
    { path: '', component: ResturantCategorySectionComponent},
    { path: 'info', component: ResturantInformationSectionComponent},
]

// [Userprofile Aside] Route
export const userProfileRouter: Routes = [
    { path: '', component: UserInfoSectionComponent},
    { path: 'reservation', component: UserReservationsSectionComponent},
    { path: 'privacy-policy', component: PrivacyPolicySectionComponent},
    { path: 'recover-phone', component: RecoverPhoneSectionComponent},
]
