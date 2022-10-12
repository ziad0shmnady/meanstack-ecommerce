import { User } from './../interfaces/user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductCategory } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ApitestService {
  constructor(private httpclient: HttpClient) {}

  getProducts(category: ProductCategory = 'all') {
    return new Promise<Product[]>((resolve, reject) => {
      const endPoint =
        category === 'all' ? '/product' : `/product?category=${category}`;
      try {
        this.httpclient
          .get(environment.apiURL + endPoint)
          .subscribe((response: any) => {
            resolve(response.data);
          });
      } catch {
        reject();
      }
    });
  }
  getProductById(id: string|null): any {
    return new Promise<Product[]>((resolve, reject) => {
      try {
        this.httpclient.get(`${environment.apiURL}/product/${id}`)
          .subscribe((response: any) => {
            resolve(response.data);
          });
      } catch {
        reject();
      }
    });
  }

  getUserById(id: string|null): any {
    return new Promise<User>((resolve, reject) => {
      try {
        this.httpclient.get(`${environment.apiURL}/user/${id}`)
          .subscribe((response: any) => {
            resolve(response.data);
          });
      } catch {
        reject();
      }
    });
  }

  getUser() {
    return new Promise<Product[]>((resolve, reject) => {
      try {
        this.httpclient
          .get(environment.apiURL + "/home")
          .subscribe((response: any) => {
            resolve(response.data);
          });
      } catch {
        reject();
      }
    });
  }

}

export interface PriceFilter {
  minValue: number;
  maxValue: number;
}
