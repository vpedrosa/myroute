import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private menu_items = [
        {route: '/', text: 'Home'},
        {route: '/lugares', text: 'Lugares'},
        {route: '/rutas', text: 'Rutas'},
        {route: '/perfil', text: 'Perfil'},
    ];
}
