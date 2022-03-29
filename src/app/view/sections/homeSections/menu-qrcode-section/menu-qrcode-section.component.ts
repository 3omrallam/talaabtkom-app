import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';

@Component({
  selector: 'app-menu-qrcode-section',
  templateUrl: './menu-qrcode-section.component.html',
  styleUrls: ['./menu-qrcode-section.component.scss']
})
export class MenuQrcodeSectionComponent implements OnInit {
  // Animation Menu QR code Path
  options: AnimationOptions = {
    path: '../../../../../assets/animations/40888-yellow-qr-code-menu.json',
  };

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }
  animationCreated(animationItem: AnimationItem): void {
  }

}
