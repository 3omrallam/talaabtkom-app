import { Routes} from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { resturantRouter, userProfileRouter } from '../pages/page-router.module';
import { ResturantProfilePageComponent } from '../pages/resturant-profile-page/resturant-profile-page.component';
import { ResturantsListPageComponent } from '../pages/resturants-list-page/resturants-list-page.component';
import { UserProfilePageComponent } from '../pages/user-profile-page/user-profile-page.component';


export const LayoutRouterModule: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'resturants', component: ResturantsListPageComponent},
  { path: 'userProfile', component: UserProfilePageComponent, children: [...userProfileRouter]},
  { path: 'resturant-profile/:id',component: ResturantProfilePageComponent, children: [...resturantRouter]},
]
