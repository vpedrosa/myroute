import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AuthService} from './shared/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    menu_items = [
        {route: '/', text: 'Home'},
        {route: '/lugares', text: 'Lugares'},
        {route: '/rutas', text: 'Rutas'},
        {route: '/propon-tu', text: 'Propón tú'},
        {route: '/login', text: 'Perfil'},
    ];

    logged = this.auth_service.token !== '';

    constructor(private router: Router, private auth_service: AuthService) {
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

    logout() {
        this.auth_service.logout();
        this.logged = true;
    }
}
