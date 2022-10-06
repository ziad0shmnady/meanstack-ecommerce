import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = 'http://localhost:4000/product';

  constructor(private httpClient: HttpClient) {}

  getProducts(): any {
    return this.httpClient.get(this.url);
  }

  getProductById(id: string): any {
    return this.httpClient.get(`${this.url}/${id}`);
  }
}
