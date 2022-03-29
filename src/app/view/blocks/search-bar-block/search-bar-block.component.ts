import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, AfterViewChecked } from '@angular/core';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';

@Component({
  selector: 'app-search-bar-block',
  templateUrl: './search-bar-block.component.html',
  styleUrls: ['./search-bar-block.component.scss']
})
export class SearchBarBlockComponent implements OnInit, OnDestroy {
  
  @ViewChild('resetBTN') resetBTN! : ElementRef;
  @Input()searchPlaceHolder:any
  @Output() searchInputVal = new EventEmitter<string>();
  constructor( public _ResturantCardService: ResturantCardService) { }
  
  ngOnInit(): void {
    console.log(this._ResturantCardService.getProductDetails);
    setTimeout(() => {
      this.triggerClick()
    }, 50);
    
  }

  ngSubmit(formValue: any) {}

  getInputValue(e : any){
    console.log(e.target.value);
    this.searchInputVal.emit(e.target.value)
  }
  
  triggerClick() {
    let el: HTMLElement = this.resetBTN?.nativeElement as HTMLElement;
    el.click()
  }

  ngOnDestroy(): void {
    this.triggerClick()
  }

}
