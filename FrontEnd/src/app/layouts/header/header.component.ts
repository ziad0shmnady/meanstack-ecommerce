import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  itemName: string = 'Item 1';
  isDisabled: boolean = true;
  constructor(private cartService: CartService) {}

  getCartCount(): number {
    return this.cartService.getProductCount();
  }

}