import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-directory',
  templateUrl: './service-directory.component.html',
  styleUrls: ['./service-directory.component.sass']
})
export class ServiceDirectoryComponent implements OnInit {
  services: Array<any>;

  constructor() { }

  ngOnInit() {
    this.services = [
      {
        name: "Accountancy",
        icon: './assets/img/icon-shape51.png'
      },
      {
        name: "Associations",
        icon: './assets/img/icon-associations.png'
      },
      {
        name: "Buy/Sell Dental + Practice",
        icon: './assets/img/icon-bye-sell.png'
      },
      {
        name: "Clinical Waste Collection",
        icon: './assets/img/icon-clinical-waste.png'
      },
      {
        name: "Computer Service",
        icon: './assets/img/icon-computer-service.png'
      },
      {
        name: "CPR/Basic Life Support Training",
        icon: './assets/img/icon-cpr.png'
      },
      {
        name: "Dental Recruitment",
        icon: './assets/img/icon-dental.png'
      },
      {
        name: "Dental Software",
        icon: './assets/img/icon-software.png'
      },
      {
        name: "Electrical Safety",
        icon: './assets/img/icon-electrical-safety.png'
      },
      {
        name: "Marketing",
        icon: './assets/img/icon-marketing.png'
      },
      {
        name: "Others",
        icon: './assets/img/icon-others.png'
      },
      {
        name: "Repairs",
        icon: './assets/img/icon-repairs.png'
      },
      {
        name: "Solicitors",
        icon: './assets/img/icon-solicitors.png'
      },
      {
        name: "Surgery Design",
        icon: './assets/img/icon-surgery-design.png'
      },
      {
        name: "Training & Courses",
        icon: './assets/img/icon-training.png'
      },
      {
        name: "Web Designers",
        icon: './assets/img/icon-web-designers.png'
      },
      {
        name: "Cleaning Agencies",
        icon: './assets/img/icon-clining-agencies.png'
      },
      {
        name: "Dental  Chair + Recovery",
        icon: './assets/img/icon-dental-chair.png'
      },
      {
        name: "Equipment + Engineering",
        icon: './assets/img/icon-equipment.png'
      },
      {
        name: "Selling Gold",
        icon: './assets/img/icon-selling-gold.png'
      },
      {
        name: "Uniform & + Workwear",
        icon: './assets/img/icon-uniform.png'
      },
    ];
  }

}
