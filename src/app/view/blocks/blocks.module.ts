import { SectionsModule } from './../sections/sections.module';
import { SearchBlockComponent } from './masterContainerBlocks/search-block/search-block.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarBlockComponent } from './headerBlocks/navbar/navbar-block.component';
import { FilterSelectionBlockComponent } from './sideMenuBlocks/filter-selection/filter-selection-block.component';
import { StickerBlockComponent } from './headerBlocks/sticker-block/sticker-block.component';
import { NavigatorBlockComponent } from './headerBlocks/navigator-block/navigator-block.component';
import { UserProfileBlockComponent } from './headerBlocks/user-profile-block/user-profile-block.component';
import { IconComponent } from './shared/icon/icon.component';
import { FooterNavigatorBlockComponent } from './footer-blocks/footer-navigator-block/footer-navigator-block.component';
import { CardBlockComponent } from './masterContainerBlocks/card-block/card-block.component';
import { FeedbackCardBlockComponent } from './masterContainerBlocks/feedback-card-block/feedback-card-block.component';



@NgModule({
  declarations: [
    NavbarBlockComponent,
    FilterSelectionBlockComponent,
    StickerBlockComponent,
    NavigatorBlockComponent,
    UserProfileBlockComponent,
    IconComponent,
    SearchBlockComponent,
    FooterNavigatorBlockComponent,
    CardBlockComponent,
    FeedbackCardBlockComponent,
    
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    NavbarBlockComponent,
    FilterSelectionBlockComponent,
    StickerBlockComponent,
    NavigatorBlockComponent,
    UserProfileBlockComponent,
    IconComponent,
    SearchBlockComponent,
    FooterNavigatorBlockComponent,
    CardBlockComponent,
    FeedbackCardBlockComponent
    
  ]
})
export class BlocksModule { }
