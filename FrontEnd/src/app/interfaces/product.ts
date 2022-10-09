export type ProductCategory = 'all' | 'Laptop' | 'Mobiles' | 'Tablet';

export interface Product {
  _id: number;
  name: string;
  price: number;
  sizes: { name: string; price: number }[];
  colors: string[];
  image_url: string;
  category: ProductCategory;
  discount: number;
}
