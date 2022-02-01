import { Component, Input, IterableDiffers, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu-navigators',
  templateUrl: './side-menu-navigators.component.html',
  styleUrls: ['./side-menu-navigators.component.scss']
})
export class SideMenuNavigatorsComponent implements OnInit {
  isShow:boolean = false; 
  statusClass:any='not-active';
  @Input()listElements! : any;
  constructor(public activatedRoute: Router) { }

  ngOnInit(): void {    
  }
  listDisplay() {
    this.isShow = !this.isShow;
  }
  scrollTo(section:any) {
    document.querySelector('#' + section)?.scrollIntoView();
  }
  setActiveClass(section:any){
    console.log(section)
    // document.querySelector('.'+section)?.classList.toggle('bg-danger');
    // document.querySelector('.'+section)?.classList.toggle('bg-info');
  }
 
}
