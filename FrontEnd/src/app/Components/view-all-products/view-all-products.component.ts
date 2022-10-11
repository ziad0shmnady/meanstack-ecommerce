import { ApitestService, PriceFilter } from './../../services/Api.service';
import { Product, ProductCategory } from 'src/app/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {
  priceList: Array<PriceFilter> = [{ minValue: 0, maxValue: 0 }];
  products: Array<Product> = [];
  constructor(private route: ActivatedRoute,private apitest: ApitestService) { }

  async ngOnInit() {
    try {
      const category:any = this.route.snapshot.paramMap.get('category');
      this.products = await this.apitest.getProducts(category);
    } catch (e) {
      console.error(e);
    }
  }

  changePrice(priceList: Array<PriceFilter>) {
    this.priceList = priceList;
  }

}
