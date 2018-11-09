import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-route',
    templateUrl: './route.component.html',
    styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
    private routes = [
        {url: 'https://place-hold.it/500x300'}
    ];
    private comments = [
        {img_url: 'https://place-hold.it/50x50', text: 'Este es un comentario de ejemplo', name: 'Antonio Martín', date: '18/03/2018'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
