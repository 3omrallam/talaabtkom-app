import { Routes } from '@angular/router';
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
]
