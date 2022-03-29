import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-footer-navigator-block',
  templateUrl: './footer-navigator-block.component.html',
  styleUrls: ['./footer-navigator-block.component.scss']
})
export class FooterNavigatorBlockComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }


  

}
