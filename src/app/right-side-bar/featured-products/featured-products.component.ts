import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.sass']
})
export class FeaturedProductsComponent implements OnInit {
  products: Array<any>;

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        name: "Product Name",
        descriptions: "Product Short Description. ",
        information: "The quick brown fox jumps over the lazy dog.",
        icon: './assets/img/icon-layer34.png',
      },
      {
        name: "Product Name",
        descriptions: "Product Short Description. ",
        information: "The quick brown fox jumps over the lazy dog.",
        icon: './assets/img/icon-layer35.png',
      },
    ];
  }
}
