import { Component, OnInit } from '@angular/core';
import { FooterPageService } from 'src/app/view/pages/services/footer-page.service';
@Component({
  selector: 'app-footer-navigator-block',
  templateUrl: './footer-navigator-block.component.html',
  styleUrls: ['./footer-navigator-block.component.scss']
})
export class FooterNavigatorBlockComponent implements OnInit {

  constructor(public _FooterPageService: FooterPageService) { }

  ngOnInit(): void {
  }


  

}
