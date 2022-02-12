import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-receipt-block',
  templateUrl: './total-receipt-block.component.html',
  styleUrls: ['./total-receipt-block.component.scss']
})
export class TotalReceiptBlockComponent implements OnInit {
  @Input() receiptDetails : any

  constructor() { }

  ngOnInit(): void {
  }

}
