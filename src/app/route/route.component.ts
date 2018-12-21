import {Component, OnInit} from '@angular/core';
import {RoutesService} from '../shared/services/routes.service';
import {Route} from '../shared/models/route';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-route',
    templateUrl: './route.component.html',
    styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
    route_id: number = null;
    route: Route = null;
    star_number = 3;
    private sub: any;
    route_images = [
        {
            url: 'https://www.turinea.com/uploads/fotos/foto_1548_c.jpg',
            title: 'Título de imagen',
            description: 'Descripción de la imagen'
        }
    ];

    comments = [
        {
            img_url: 'https://avatars.dicebear.com/v2/female/469710a325c8f47b6a4198099f1496c7.svg',
            text: 'El sitio me ha gustado mucho',
            rating: 5,
            name: 'Laura González',
            date: '18/03/2018'
        },
        {
            img_url: 'https://avatars.dicebear.com/v2/female/4a033895e4c5f181146792f46fd26e8e.svg',
            text: 'Lo recomiendo para familias y turistas',
            name: 'Marta Gámez',
            rating: 4,
            date: '23/01/2018'
        },
    ];

    constructor(private _route_service: RoutesService, private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.route_id = +params['id'];
            this.getRoute();
        });
    }

    getRoute() {
        this._route_service.getRoute(this.route_id).subscribe(
            result => {
                this.route = new Route(result.id, result.name, result.short_description, result.description, result.image_url);
            },
            error => {
                console.log('error.', error);
            });
    }

    renderStar(index: number, stars: number) {
        return (index <= stars);
    }

}
