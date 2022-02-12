import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-section',
  templateUrl: './checkout-section.component.html',
  styleUrls: ['./checkout-section.component.scss']
})
export class CheckoutSectionComponent implements OnInit {
  @Input() orderDetails : any
  @Input() userAddress : any
  @Input() userdata : any
  @Input() receipt : any
  constructor() { }

  ngOnInit(): void {
  }

}
