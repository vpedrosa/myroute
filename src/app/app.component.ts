import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    menu_items = [
        {route: '/', text: 'Home'},
        {route: '/rutas', text: 'Lugares'},
        {route: '/rutas', text: 'Rutas'},
        {route: '/propon-tu', text: 'Propón tú'},
        {route: '/login', text: 'Perfil'},
    ];

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
