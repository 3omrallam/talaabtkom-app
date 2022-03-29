import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-signin-button-block',
  templateUrl: './signin-button-block.component.html',
  styleUrls: ['./signin-button-block.component.scss']
})
export class SigninButtonBlockComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
