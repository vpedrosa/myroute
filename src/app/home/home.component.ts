import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private routes = [
        {url: 'https://place-hold.it/500x300'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
