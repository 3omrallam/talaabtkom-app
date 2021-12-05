import { Routes} from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ResturantPageComponent } from '../pages/resturant-page/resturant-page.component';
import { ResturantsListPageComponent } from '../pages/resturants-list-page/resturants-list-page.component';


export const LayoutRouterModule: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'resturant', component: ResturantsListPageComponent},
  { path: 'resturant/resturantMainPage', component: ResturantPageComponent},
]
