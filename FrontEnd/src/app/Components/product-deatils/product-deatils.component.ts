import { Product } from 'src/app/interfaces/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-deatils',
  templateUrl: './product-deatils.component.html',
  styleUrls: ['./product-deatils.component.css'],
})
export class ProductDeatilsComponent implements OnInit {
  id: string = '';
  product: Product = {} as Product;
  constructor(
    private route: ActivatedRoute,
    private ProductsService: ProductsService
  ) {}

  ngOnInit(): void {
    const idFromQuery = this.route.snapshot.paramMap.get('id');
    if (idFromQuery) {
      this.id = idFromQuery;
      this.ProductsService.getProductById(this.id).subscribe(
        (response: any) => {
          this.product = response.data;
        }
      );
    }
  }
}
