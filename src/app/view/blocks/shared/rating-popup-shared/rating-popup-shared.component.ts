import { Component, Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-rating-popup-shared',
  templateUrl: './rating-popup-shared.component.html',
  styleUrls: ['./rating-popup-shared.component.scss'],
  
})
export class RatingPopupSharedComponent implements OnInit {

  @Input('rating') public rating: number = 1;
  @Input('starCount') public starCount: number = 5;
  @Input('color') public color: any = 'warn';
  @Output() public ratingUpdated = new EventEmitter();

  ResturantName: any = JSON.parse(localStorage.getItem('marketName')!);
  constructor(public snackBar: MatSnackBar) { }

  public snackBarDuration: number = 2000;
  public ratingArr :any= [];
  ngOnInit(): void {
    this.ResturantName;
    console.log("a "+this.starCount)
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
   
  }
  onClick(rating:any) {
    console.log(rating)
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index:any) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: any;
  countStar(star:any) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
  

}
export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}
