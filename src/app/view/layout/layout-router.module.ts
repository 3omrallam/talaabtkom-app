import { Routes} from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ResturantPageComponent } from '../pages/resturant-page/resturant-page.component';
import { ResturantsListPageComponent } from '../pages/resturants-list-page/resturants-list-page.component';
import { UserProfilePageComponent } from '../pages/user-profile-page/user-profile-page.component';


export const LayoutRouterModule: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'resturant', component: ResturantsListPageComponent},
  { path: 'userProfile', component: UserProfilePageComponent},
  { path: 'resturant/resturantMainPage', component: ResturantPageComponent},
]
