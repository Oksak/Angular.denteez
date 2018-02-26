import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-companies',
  templateUrl: './featured-companies.component.html',
  styleUrls: ['./featured-companies.component.sass']
})
export class FeaturedCompaniesComponent implements OnInit {
companies: Array<any>;


  constructor() { }

  ngOnInit() {
    this.companies = [
      {
        name: 'Audi',
        spec: 'Manufacturer',
        city: 'Belgrade',
        country: 'Serbia',
        photo: './assets/img/icon-layer39.png'
      },
      {
        name: 'Porsche',
        spec: 'Service Provider',
        city: 'New York',
        country: 'USA',
        photo: './assets/img/icon-layer40.png'
      },
      {
        name: 'Mercedes',
        spec: 'Supplier',
        city: 'London',
        country: 'England',
        photo: './assets/img/icon-layer41.png'
      }
    ];
  }

}
