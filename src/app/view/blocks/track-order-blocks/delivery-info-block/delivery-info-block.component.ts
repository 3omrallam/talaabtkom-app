import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-info-block',
  templateUrl: './delivery-info-block.component.html',
  styleUrls: ['./delivery-info-block.component.scss']
})
export class DeliveryInfoBlockComponent implements OnInit {
  @Input() delievryDetails! :any
  constructor() { }

  ngOnInit(): void {
  }

}
