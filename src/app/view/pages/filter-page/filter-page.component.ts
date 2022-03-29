import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { MarketService } from 'src/app/core/services/market/market.service';
import { ResturantCardService } from 'src/app/core/services/resturant/resturant-card.service';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss']
})
export class FilterPageComponent implements OnInit {
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

  constructor(public _FilterService: FilterService, public _MarketService: MarketService, public _ResturantCardService: ResturantCardService) { }
  fields: string[] = [];
  isfrmChecked: boolean = false;
  ischecked: boolean = false
  ngOnInit(): void {
    this.getFilterList();
    this.selectAll.valueChanges.subscribe((selectAllValue) => {
      this.menuOptions.setValue(this.menuOptions.value.map(() => selectAllValue));
    });
  }
  // Get Fields in [kitchen Type] Filteration
  getFilterList() {
    this._MarketService.getMarketFilters().subscribe((res: any) => {
      this._MarketService.filtersName = res.data
    })
  }
  // Select All Filter
  AllFilters(e:any){
    console.log(e.target.checked);
    console.log(this._ResturantCardService.fields);  
    if(e.target?.checked){
      this._ResturantCardService.fields = []
      this._ResturantCardService.isChecked = true;
      console.log(this._ResturantCardService.fields);
    }else{  
      this._ResturantCardService.isChecked = false;
    }
    this.getAllResturants();
  }


  // Make array of [checkboxes that checked] send to server
  listFields(e: any) {
    if (e.target?.checked) {
      this._ResturantCardService.fields.push(e.target.value);
    } else {
      for (let field of this._ResturantCardService.fields) {
        field == e.target.value && this._ResturantCardService.fields.splice(this._ResturantCardService.fields.indexOf(field), 1)
        console.log(this._ResturantCardService.fields);
        
      }
      
    }
    this.getAllResturants();
  }
  // Get All Resturants with Filteration
  getAllResturants(searchVal: any = '') {
    this._ResturantCardService.getNearbyResturant(
      this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.latitude,
      this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.longitude,
      this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.latitude,
      this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.longitude,
      this._ResturantCardService?.getNearbyMarketsFromLocalStorage?.is_default, searchVal, this._ResturantCardService.fields, this._ResturantCardService.deliveryfree
      , this._ResturantCardService.normal_order_by, this._ResturantCardService.order_by_type, this._ResturantCardService.rate_order_by)
      .subscribe(res => {
        this._ResturantCardService.placeholder = false
        this._ResturantCardService.resturantCards = res
      }, (e) => console.log(e))
  }
  // Search Type
  searchType(e: any) {
    console.log(e.target.value);
    if (e.target?.checked) {
      // Checked values
      if (e.target.value === 'توصيل مجاني') {
        this._ResturantCardService.deliveryfree = true;
      } else if (e.target.value === 'اجدد المطاعم') {
        this._ResturantCardService.order_by_type = 'desc';
        this._ResturantCardService.normal_order_by = true;
      } else if (e.target.value === 'الأعلي تقيما') {
        this._ResturantCardService.rate_order_by = true
      }
    }else{
      // Unchecked values
      if (e.target.value === 'توصيل مجاني') {
        this._ResturantCardService.deliveryfree = false;
      } else if (e.target.value === 'اجدد المطاعم') {
        this._ResturantCardService.order_by_type = 'asc';
        this._ResturantCardService.normal_order_by = false;
      } else if (e.target.value === 'الأعلي تقيما') {
        this._ResturantCardService.rate_order_by = false
      }

    }
    this.getAllResturants();
  }
  partiallySelected = this.menuOptions.valueChanges.pipe(
    map((optionValues) => optionValues.some((value: boolean[]) => value !== this.selectAll.value))
  );

  get selectAll() {
    return this.menu.get('selectAll') as FormControl;
  }
  get menuOptions() {
    return this.menu.get('options') as FormArray;
  }
  optionsPartiallySelected() {
    const values = this.menuOptions.value as boolean[];
    return values.some((value) => value !== this.selectAll.value);
  }


}
