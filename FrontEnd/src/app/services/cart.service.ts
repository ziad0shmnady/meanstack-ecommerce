import { Injectable } from '@angular/core';
import { CartLine } from '../interfaces/cart-line';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartLines: Array<CartLine> = [];
  constructor() {
    this.cartLines = JSON.parse(localStorage.getItem('cartLines') || '[]');
  }

  getProducts(): Array<CartLine> {
    return this.cartLines;
  }

  getProductCount(): number {
    let total = 0;
    this.cartLines.forEach((item: any) => {
      total += item.count;
    });
    return total;
  }

  addProduct(product: Product) {
    let itemFound = false;
    for (let i = 0; i < this.cartLines.length; i++) {
      if (this.cartLines[i].product._id === product._id) {
        this.cartLines[i].count += 1;
        itemFound = true;
      }
    }
    if (!itemFound) {
      this.cartLines.push(new CartLine(product));
    }
    localStorage.setItem('cartLines', JSON.stringify(this.cartLines));
  }

  //Implement function removeProduct
  removeProduct(productId: number) {
    let index = this.cartLines.findIndex((l) => l.product._id === productId);
    if (index >= 0) this.removeLine(index);
  }
  //Implement function removeLine
  removeLine(index: number) {
    this.cartLines.splice(index, 1);
    localStorage.setItem('cartLines', JSON.stringify(this.cartLines));
  }

  getTotal() {
    return this.getSubTotal() + this.getShipping();
  }

  getSubTotal() {
    return this.cartLines
      .map((l) => l.product.sizes[0].price * l.count)
      .reduce((a, v) => (a += v), 0);
  }

  getShipping() {
    return this.getSubTotal() * 0.005;
  }

  addItem(index: number) {
    this.cartLines[index].count++;
    localStorage.setItem('cartLines', JSON.stringify(this.cartLines));
  }

  removeItem(index: number) {
    this.cartLines[index].count--;
    if (this.cartLines[index].count == 0) this.removeLine(index);
    localStorage.setItem('cartLines', JSON.stringify(this.cartLines));
  }
}
