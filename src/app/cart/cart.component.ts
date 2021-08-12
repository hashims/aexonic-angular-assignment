import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/service.service';
import { Products } from '../models/products'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  constructor(private service: ProductService) { }

  ngOnInit(): void {
  }

  get cartItems(): Products[] {
    return this.service.cartItems;
  }

  removeFromCart(product): void {
    this.service.removeFromCartArray(product);
  }

  get finalPrice(): { sum: number, discount: number }  {
    const sum = this.service.cartItems.reduce((price, item) => {
      return price + (item.price * item.quantity);
    }, 0);
    
    let discount = 0;

    if (sum > 100 && sum < 500) {
      discount = ((sum / 100) * 10);
    } else {
      discount = ((sum / 100) * 20);
    }

    return {
      sum,
      discount
    }
  }
}
