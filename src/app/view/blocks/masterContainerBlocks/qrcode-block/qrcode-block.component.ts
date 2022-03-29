import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-qrcode-block',
  templateUrl: './qrcode-block.component.html',
  styleUrls: ['./qrcode-block.component.scss']
})
export class QrcodeBlockComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
