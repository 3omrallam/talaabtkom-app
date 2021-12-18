import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutRouterModule } from './view/layout/layout-router.module';
import { LayoutComponent } from './view/layout/layout.component';
import { MasterContainerLayoutComponent } from './view/layout/master-container-layout/master-container-layout.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path : '' , component: MasterContainerLayoutComponent, children : [...LayoutRouterModule] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
