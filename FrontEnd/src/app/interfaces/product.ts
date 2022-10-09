export interface Product {
  _id: number;
  name: string;
  price: number;
  sizes:{name:string,price:number}[]
  colors:string[]
  image_url: string;
  category: string;
  discount:number
}
