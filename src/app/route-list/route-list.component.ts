import {Component, OnInit} from '@angular/core';
import {Route} from '../shared/models/route';
import {RoutesService} from '../shared/services/routes.service';

@Component({
    selector: 'app-route-list',
    templateUrl: './route-list.component.html',
    styleUrls: ['./route-list.component.scss']
})
export class RouteListComponent implements OnInit {

    public routes: Route[] = [];

    constructor(private _route_service: RoutesService) {
    }

    ngOnInit() {
        this.getRoutes();
    }

    getRoutes() {
        this._route_service.getRoutes().subscribe(
            result => {
                for (const route of result.data) {
                    this.routes.push(new Route(route.id, route.name, route.short_description, route.description, route.image_url));
                }
            },
            error => {
                console.log('error.', error);
            });
    }
}
