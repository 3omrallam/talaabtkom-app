import { Routes } from '@angular/router';
import { ResturantMenuSectionComponent } from './../sections/resturant-menu-section/resturant-menu-section.component';
import { ResturantInformationPageComponent } from './resturant-information-page/resturant-information-page.component';


export const PageRouterModule: Routes = [
    { path: '', component: ResturantMenuSectionComponent},
    { path: 'resturant-information', component: ResturantInformationPageComponent},
]
