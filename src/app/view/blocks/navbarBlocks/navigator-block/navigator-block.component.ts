import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigator-block',
  templateUrl: './navigator-block.component.html',
  styleUrls: ['./navigator-block.component.scss']
})
export class NavigatorBlockComponent implements OnInit {

  constructor(public translate:TranslateService) { }

  ngOnInit(): void {
  }

}
