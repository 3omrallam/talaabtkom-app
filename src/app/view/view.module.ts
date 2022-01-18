import { LayoutModule } from './layout/layout.module';
import { ViewComponent } from './view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ViewComponent,
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
