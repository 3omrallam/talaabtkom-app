import { LayoutModule } from './layout/layout.module';
import { ViewComponent } from './view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ViewComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports:[
    ViewComponent
  ],
})
export class ViewModule { }
