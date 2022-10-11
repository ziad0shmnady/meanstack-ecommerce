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

  // getProductCountWithFilter(
  //   priceList: Array<PriceFilter>,
  //   colorList: Array<string>,
  //   sizeList: Array<string>
  // ): number {
  //   return (
  //     this.products.filter((p) => {
  //       return (
  //         this.isPriceInRange(p.price, priceList) &&
  //         this.isColorInRange(p.color, colorList) &&
  //         this.isSizeInRange(p.size, sizeList)
  //       );
  //     }).length / 6
  //   );
  // }

  // getProductWithFilter(
  //   priceList: Array<PriceFilter>,
  //   colorList: Array<string>,
  //   sizeList: Array<string>,
  //   currentPage: number,
  //   pageSize: number
  // ): Array<Product> {
  //   return this.products
  //     .filter((p) => {
  //       return (
  //         this.isPriceInRange(p.price, priceList) &&
  //         this.isColorInRange(p.color, colorList) &&
  //         this.isSizeInRange(p.size, sizeList)
  //       );
  //     })
  //     .slice(currentPage * pageSize, currentPage * pageSize + pageSize);
  // }

  isColorInRange(color: string, colorList: Array<string>) {
    if (colorList.length == 0) return true;
    return colorList.includes(color);
  }
  isSizeInRange(size: string, sizeList: Array<string>) {
    if (sizeList.length == 0) return true;
    return sizeList.includes(size);
  }
  isPriceInRange(price: number, priceList: Array<PriceFilter>): boolean {
    for (let i = 0; i < priceList.length; i++) {
      if (priceList[i].minValue <= price && priceList[i].maxValue >= price)
        return true;
      if (priceList[i].minValue == 0 && priceList[i].maxValue == 0) return true;
    }
    return false;
  }

}

export interface PriceFilter {
  minValue: number;
  maxValue: number;
}
