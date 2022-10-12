import { ApitestService } from './../../services/Api.service';
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
  user: any;
  id:string | null = ''
  constructor(private cartService: CartService, private apitest: ApitestService) {}

  getCartCount(): number {
    return this.cartService.getProductCount();
  }
  
  ngOnInit() {
    this.id = localStorage.getItem('id')
      this.apitest.getUserById(this.id ).then((data: any) => {
        this.user = data;
      });
  }

  logOut(){
    localStorage.removeItem('id')
  }

}