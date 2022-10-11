import { PriceFilter } from './../../services/Api.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.css']
})
export class FilterProductsComponent implements OnInit {
  priceList: Array<PriceFilter> = [];
  @Output() priceEmitter = new EventEmitter<Array<PriceFilter>>();
  constructor() {}

  ngOnInit(): void {}

  changePrice(event: any, min: number, max: number) {
    if (event.target.checked) {
      this.priceList.push({ minValue: min, maxValue: max });
    } else {
      let index = this.priceList.findIndex(
        (x) => x.minValue == min && x.maxValue == max
      );
      this.priceList.splice(index, 1);
    }
    this.priceEmitter.emit(this.priceList);
  }
}
