import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-card-block',
  templateUrl: './notification-card-block.component.html',
  styleUrls: ['./notification-card-block.component.scss']
})
export class NotificationCardBlockComponent implements OnInit {
  @Input()notificationDetails!:any

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      
      console.log(this.notificationDetails.user.media[0]);
    }, 300);
    
  }

}
