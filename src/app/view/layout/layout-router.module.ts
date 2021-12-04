import { Routes} from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ResturantPageComponent } from '../pages/resturant-page/resturant-page.component';


export const LayoutRouterModule: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'resturant', component: ResturantPageComponent},
]
