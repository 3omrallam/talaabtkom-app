import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './headerComponents/navbar/navbar.component';
import { FilterSelectionComponent } from './sideMenuComponents/filter-selection/filter-selection.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FilterSelectionComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    NavbarComponent,
    FilterSelectionComponent
    
  ]
})
export class ComponentsModule { }
