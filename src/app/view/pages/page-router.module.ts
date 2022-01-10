import { Routes } from '@angular/router';
import { AllReservationsBlockComponent } from '../blocks/reservations-blocks/all-reservations-block/all-reservations-block.component';
import { CanceledReservationsBlockComponent } from '../blocks/reservations-blocks/canceled-reservations-block/canceled-reservations-block.component';
import { CompleteReservationsBlockComponent } from '../blocks/reservations-blocks/complete-reservations-block/complete-reservations-block.component';
import { CurrentReservationsBlockComponent } from '../blocks/reservations-blocks/current-reservations-block/current-reservations-block.component';
import { ChangePasswordSectionComponent } from '../sections/change-password-section/change-password-section.component';
import { PrivacyPolicySectionComponent } from '../sections/privacy-policy-section/privacy-policy-section.component';
import { RecoverPhoneSectionComponent } from '../sections/recover-phone-section/recover-phone-section.component';
import { ResturantCategorySectionComponent } from '../sections/resturant-category-section/resturant-category-section.component';
import { ResturantInformationSectionComponent } from '../sections/resturant-information-section/resturant-information-section.component';
import { userReservationRouter } from '../sections/section-router.module';
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
    { path: 'reservation', component: UserReservationsSectionComponent, children: [...userReservationRouter]},
    { path: 'privacy-policy', component: PrivacyPolicySectionComponent},
    { path: 'recover-phone', component: RecoverPhoneSectionComponent},
    { path: 'change-password', component: ChangePasswordSectionComponent},
]

