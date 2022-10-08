import { ApitestService } from '../../../services/Api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductCategory } from 'src/app/interfaces/product';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [];
  @Input() title: string = 'Products';
  @Input() category: ProductCategory = 'all';

  constructor(private apitest: ApitestService) {}
  config: SwiperOptions = {
    breakpoints: {
      499: {
        slidesPerView: 3,
        spaceBetween: 3,
        slidesPerGroup: 3,
      },
      999: {
        slidesPerView: 6.3,
        spaceBetween: 50,
        slidesPerGroup: 7,
      },
    },
  };

  async ngOnInit() {
    try {
      this.products = await this.apitest.getProducts(this.category);
    } catch (e) {
      this.products = [];
      console.error(e);
    }
  }
}
