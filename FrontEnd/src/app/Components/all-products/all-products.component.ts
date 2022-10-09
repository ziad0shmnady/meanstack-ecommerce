import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interfaces/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  @Input() products: Array<Product> = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.cartService.addProduct(product);
  }

}
