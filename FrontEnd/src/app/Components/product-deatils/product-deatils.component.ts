import { CartService } from 'src/app/services/cart.service';
import { CartLine } from './../../interfaces/cart-line';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-deatils',
  templateUrl: './product-deatils.component.html',
  styleUrls: ['./product-deatils.component.css'],
})
export class ProductDeatilsComponent implements OnInit {
  id: string = '';
  product: Product = {} as Product;
  count: number;

  @Input() index: number = -1;
  @Input() cartLine: CartLine = {} as CartLine;

  @Output() addItemEmitter = new EventEmitter<number>();
  constructor(
    private route: ActivatedRoute,
    private ProductsService: ProductsService,
    private cartService: CartService
  ) {
    this.count = 1;
  }

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
  
  addItem() {
    this.count++;
  }
  removeItem() {
    if (this.count > 1){
      this.count--
    }
  }

  addToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}
