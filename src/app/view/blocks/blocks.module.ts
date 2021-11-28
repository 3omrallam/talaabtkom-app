import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarBlockComponent } from './headerBlocks/navbar/navbar-block.component';
import { FilterSelectionBlockComponent } from './sideMenuBlocks/filter-selection/filter-selection-block.component';
import { StickerBlockComponent } from './headerBlocks/sticker-block/sticker-block.component';
import { NavigatorBlockComponent } from './headerBlocks/navigator-block/navigator-block.component';
import { UserProfileBlockComponent } from './headerBlocks/user-profile-block/user-profile-block.component';
import { IconComponent } from './shared/icon/icon.component';
import { RestaurantGridCardBlockComponent } from './masterContainerBlocks/restaurantCards/restaurant-grid-card-block/restaurant-grid-card-block.component';



@NgModule({
  declarations: [
    NavbarBlockComponent,
    FilterSelectionBlockComponent,
    StickerBlockComponent,
    NavigatorBlockComponent,
    UserProfileBlockComponent,
    IconComponent,
    RestaurantGridCardBlockComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarBlockComponent,
    FilterSelectionBlockComponent,
    StickerBlockComponent,
    NavigatorBlockComponent,
    UserProfileBlockComponent,
    IconComponent,
    RestaurantGridCardBlockComponent

  ]
})
export class BlocksModule { }
