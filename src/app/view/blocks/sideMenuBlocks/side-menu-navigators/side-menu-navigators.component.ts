import { Component, Input, IterableDiffers, OnInit} from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';

@Component({
  selector: 'app-side-menu-navigators',
  templateUrl: './side-menu-navigators.component.html',
  styleUrls: ['./side-menu-navigators.component.scss']
})
export class SideMenuNavigatorsComponent implements OnInit {
  @Input()routerLink1:any;
  isShow:boolean = false; 
  statusClass:any='not-active';
  @Input()listElements! : any;
  constructor(public activateRouter: Router, public _ResturantCardService : ResturantCardService) { }

  ngOnInit(): void {    
  }
  listDisplay() {
    this.isShow = !this.isShow;
  }
  scrollTo(section:any) {
    document.querySelector('#' + section)?.scrollIntoView();
  }
 
}
