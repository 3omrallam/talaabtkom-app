import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';
@Component({
  selector: 'app-contactus-section',
  templateUrl: './contactus-section.component.html',
  styleUrls: ['./contactus-section.component.scss']
})
export class ContactusSectionComponent implements OnInit {
  // Animation Menu QR code Path
  options: AnimationOptions = {
    path: '../../../../assets/animations/Contact-Us.json',
  };

  constructor() { }

  ngOnInit(): void {
  }
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }


}
