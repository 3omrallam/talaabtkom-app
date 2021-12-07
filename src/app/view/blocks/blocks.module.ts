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
import { FeedbackCardBlockComponent } from './masterContainerBlocks/feedback-card-block/feedback-card-block.component';
import { RouterModule } from '@angular/router';
import { ResturantGridCardBlockComponent } from './masterContainerBlocks/resturant-grid-card-block/resturant-grid-card-block.component';
import { ResturantListCardBlockComponent } from './masterContainerBlocks/resturant-list-card-block/resturant-list-card-block.component';
import { CoverHeaderBlockComponent } from './headerBlocks/cover-header-block/cover-header-block.component';
import { ResturantStickerBlockComponent } from './sideMenuBlocks/resturant-sticker-block/resturant-sticker-block.component';
import { QrcodeBlockComponent } from './masterContainerBlocks/qrcode-block/qrcode-block.component';
import { MenuListBlockComponent } from './masterContainerBlocks/menu-list-block/menu-list-block.component';
import { SideMenuNavigatorsComponent } from './sideMenuBlocks/side-menu-navigators/side-menu-navigators.component';



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
    FeedbackCardBlockComponent,
    ResturantGridCardBlockComponent,
    ResturantListCardBlockComponent,
    CoverHeaderBlockComponent,
    ResturantStickerBlockComponent,
    QrcodeBlockComponent,
    MenuListBlockComponent,
    SideMenuNavigatorsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
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
    FeedbackCardBlockComponent,
    ResturantGridCardBlockComponent,
    ResturantListCardBlockComponent,
    CoverHeaderBlockComponent,
    ResturantStickerBlockComponent,
    QrcodeBlockComponent,
    MenuListBlockComponent,
    SideMenuNavigatorsComponent

  ]
})
export class BlocksModule { }
