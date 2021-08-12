import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/service.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public productInCart = this.service.cartItems || [];
  
  constructor(private route: Router, private service: ProductService) { }

  ngOnInit(): void {
  }

  get productInCartCount() {
    return this.productInCart.reduce((count, item) => count + item.quantity, 0)
  }
}
