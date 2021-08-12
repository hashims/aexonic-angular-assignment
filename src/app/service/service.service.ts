import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Products } from '../models/products'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private apiUrl: string = 'https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7';
  public cartItems: Products[] = [];

  constructor(private http: HttpClient) { }

  getMockData(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl);
  }

  addToCartArray(product: Products) {
    const item = this.cartItems.find(item => item.id === product.id);

    if (!item) {
      const obj = {
        id: product.id,
        item_name: product.item_name,
        price: product.price,
        quantity: 1
      }

      this.cartItems.push(obj);
    } else {
      item.quantity += 1;
    }
  }

  removeFromCartArray(product: number) {
    const item = this.cartItems.find(item => item.id === product);
    item.quantity -= 1;

    const index = this.cartItems.findIndex(item => item.quantity === 0);

    if (index != -1) {
      this.cartItems.splice(index, 1);
    }

    if (this.cartItems.length === 1 && this.cartItems[0].quantity == 0) {
      this.cartItems = [];
    }
  }
}
