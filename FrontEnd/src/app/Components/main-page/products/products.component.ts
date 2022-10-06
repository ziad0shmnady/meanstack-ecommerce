import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from './../../../services/products.service';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [];
  @Input() title: string = 'Products';
  @Input() category: string = '';
  constructor(private ProductsService: ProductsService) {}
  config: SwiperOptions = {
    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: false,
    // },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   hide: true,
    // },
    breakpoints: {
      // when window width is <= 499px
      499: {
        slidesPerView: 3,
        spaceBetween: 3,
        slidesPerGroup: 3,
      },
      // when window width is <= 999px
      999: {
        slidesPerView: 6.3,
        spaceBetween: 50,
        slidesPerGroup: 7,
      },
    },
  };
  ngOnInit(): void {
    this.ProductsService.getProducts().subscribe(
      (response: { data: Product[] }) => {
        this.products = response.data.filter(
          (product) => product.category === this.category
        );
      }
    );
  }
}
