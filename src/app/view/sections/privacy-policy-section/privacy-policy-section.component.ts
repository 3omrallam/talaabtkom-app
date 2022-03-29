import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { MarketService } from 'src/app/core/services/market/market.service';
import { PagesService } from 'src/app/core/services/pages/pages.service';

@Component({
  selector: 'app-privacy-policy-section',
  templateUrl: './privacy-policy-section.component.html',
  styleUrls: ['./privacy-policy-section.component.scss']
})
export class PrivacyPolicySectionComponent implements OnInit {
  menu = new FormGroup({
    selectAll: new FormControl(false),
    options: new FormArray([
      new FormControl(false),
      new FormControl(false)
    ])
  });
  optionLabels = [
    'Option A',
    'Option B'
  ]
  partiallySelected = this.menuOptions.valueChanges.pipe(
    map((optionValues) => optionValues.some((value: boolean[]) => value !== this.selectAll.value))
  );

  get selectAll() {
    return this.menu.get('selectAll') as FormControl;
  }
  get menuOptions() {
    return this.menu.get('options') as FormArray;
  }

  constructor(public _PagesService: PagesService) { }

  ngOnInit(): void {
    this.getAbout();
    this.selectAll.valueChanges.subscribe((selectAllValue) => {
      this.menuOptions.setValue(this.menuOptions.value.map(() => selectAllValue));
    });
  }
  getAbout(){
    this._PagesService.getPage(2).subscribe((res:any) =>{
      this._PagesService.privacyPolicy = res.data.description;
      console.log(res);
      
    })
  }
  optionsPartiallySelected() {
    const values = this.menuOptions.value as boolean[];
    return values.some((value) => value !== this.selectAll.value);
  }
 

}
