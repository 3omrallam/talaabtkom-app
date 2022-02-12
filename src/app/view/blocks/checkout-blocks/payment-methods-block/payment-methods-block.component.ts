import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-methods-block',
  templateUrl: './payment-methods-block.component.html',
  styleUrls: ['./payment-methods-block.component.scss']
})
export class PaymentMethodsBlockComponent implements OnInit {
  @Input() paymentMethod : any

  constructor() { }

  ngOnInit(): void {
  }

}
