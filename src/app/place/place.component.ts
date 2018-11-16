import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
    routes = [
        {url: 'https://place-hold.it/500x300'}
    ];
    comments = [
        {img_url: 'https://place-hold.it/50x50', text: 'El mirador de San Nicolás es bonito', name: 'Antonio Martín', date: '18/03/2018'}
    ];


    constructor() { }

  ngOnInit() {
  }

}
