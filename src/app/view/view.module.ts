import { LayoutModule } from './layout/layout.module';
import { ViewComponent } from './view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';

@NgModule({
  declarations: [
    ViewComponent,
    DashComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
  ],
  exports:[
    ViewComponent
  ],
})
export class ViewModule { }
