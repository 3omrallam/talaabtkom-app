import { Routes } from '@angular/router';
import { ResturantCategorySectionComponent } from '../sections/resturant-category-section/resturant-category-section.component';
import { ResturantInformationSectionComponent } from '../sections/resturant-information-section/resturant-information-section.component';


export const PageRouterModule: Routes = [
    { path: '', component: ResturantCategorySectionComponent},
    { path: 'info', component: ResturantInformationSectionComponent},
]
