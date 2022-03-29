import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PagesService } from 'src/app/core/services/pages/pages.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor(public _PagesService: PagesService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.getAbout();
  }
  getAbout(){
    this._PagesService.getPage(1).subscribe((res:any) =>{
      this._PagesService.aboutDescription = res.data.description;
      console.log(res);
      
    })

  }
 

}
