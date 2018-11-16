import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-route',
    templateUrl: './route.component.html',
    styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
    star_number = 3;
    route_images = [
        {
            url: 'https://www.turinea.com/uploads/fotos/foto_1548_c.jpg',
            title: 'Título de imagen',
            description: 'Descripción de la imagen'
        }
    ];
    route_image = 'https://www.turinea.com/uploads/fotos/foto_1548_c.jpg';
    route_description = 'La Ruta del Califato une las capitales del al-Andalus califal y nazarí siguiendo el itinerario que unía' +
        ' en el siglo XII Córdoba y Granada. Es una cadena que eslabona alcazabas, castillos cristianos, fortalezas en parte árabes y en' +
        ' parte cristianas, erguidas en lo más alto de los cerros.\n' +
        '\n' +
        'Se pueden admirar además los bellos y accidentados paisajes del Parque Natural de las Sierras Subbéticas Cordobesas, fuertes' +
        ' y agrestes pendientes, junto con praderas y riberas por donde realizar tranquilas excursiones, siguiendo antiguos senderos, que' +
        ' conducen a los más apartados rincones.';

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

    constructor() {
    }

    ngOnInit() {
    }

    renderStar(index: number, stars: number) {
        return (index <= stars);
    }

}
