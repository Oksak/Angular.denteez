import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-you-may-know',
  templateUrl: './people-you-may-know.component.html',
  styleUrls: ['./people-you-may-know.component.sass']
})
export class PeopleYouMayKnowComponent implements OnInit {
  peoples: Array<any>;

  constructor() { }

  ngOnInit() {
    this.peoples = [
      {
        name: "Dennis Adams",
        profession: "Dentist (Practice Owner)",
        city: "London",
        country: " England",
        photo: './assets/img/icon-layer36.png'
      },
      {
        name: "Mary Carpenter",
        profession: "Designer (Practice Owner)",
        city: "Belgrade",
        country: " Serbia",
        photo: './assets/img/icon-layer37.png'
      },
      {
        name: "Danielle Salazar",
        profession: "Video Blogger",
        city: "Paris",
        country: " France",
        photo: './assets/img/icon-layer38.png'
      },
    ];
  }

}
