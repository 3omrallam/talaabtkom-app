import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';
@Component({
  selector: 'app-mobile-app-section',
  templateUrl: './mobile-app-section.component.html',
  styleUrls: ['./mobile-app-section.component.scss']
})
export class MobileAppSectionComponent implements OnInit {
  // Animation Menu QR code Path
  options: AnimationOptions = {
    path: '../../../../../assets/animations/QR scan code.json',
  };

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }
  animationCreated(animationItem: AnimationItem): void {
  }

}
