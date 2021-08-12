import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/service.service';
import { Products } from '../models/products';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public products: Products[] = [];

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getMockData().subscribe((res) => (this.products = res.slice(0, 10)));
  }

  addToCart(product) {
    this.service.addToCartArray(product);
  }
}
