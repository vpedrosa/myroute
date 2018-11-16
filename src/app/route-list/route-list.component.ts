import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-route-list',
    templateUrl: './route-list.component.html',
    styleUrls: ['./route-list.component.scss']
})
export class RouteListComponent implements OnInit {

    routes = [
        {
            src: 'https://www.turinea.com/uploads/fotos/foto_1548_c.jpg',
            title: 'Ruta del califato',
            short_description: 'La Ruta del Califato une las capitales del al-Andalus califal y nazarí siguiendo el itinerario' +
            ' que unía en el siglo XII Córdoba y Granada.',
            valoration: 4,
            time: '3 minutos'
        },
        {
            src: 'https://www.turinea.com/uploads/fotos/foto_40_c.jpg',
            title: 'Ruta de los cementerios',
            short_description: 'La RUTA EUROPEA DE CEMENTERIOS está formada por una red de cementerios que, abriendo sus recintos' +
            ' mediante rutas culturales, da a conocer este importante patrimonio funerario existente en ' +
            'toda Europa de una manera conjunta.',
            valoration: 2,
            time: '1 mes'
        },
        {
            src: 'https://www.turinea.com/uploads/custom/registro_403_.jpg',
            title: 'Ruta de García Lorca',
            short_description: 'Poeta y dramaturgo granadino (1898-1936), se le adscribe a la llamada Generación del 27 y es ' +
            'considerado como uno de los mejores escritores en español del siglo XX.',
            valoration: 3,
            time: '2 semanas'
        },
        {
            src: 'https://www.turinea.com/uploads/fotos/foto_1584_c.jpg',
            title: 'Ruta de los Nazaríes',
            short_description: 'Esta ruta se dedica precisamente a los protagonistas de tan importante capítulo, a la dinastía nazarí' +
            ' que acuñó y encabezó el último estado de al-Andalus',
            valoration: 5,
            time: '5 minutos'
        },
        {
            src: 'https://www.turinea.com/uploads/fotos/foto_1548_c.jpg',
            title: 'Ruta del califato',
            short_description: 'La Ruta del Califato une las capitales del al-Andalus califal y nazarí siguiendo el itinerario' +
            ' que unía en el siglo XII Córdoba y Granada.',
            valoration: 4,
            time: '3 minutos'
        },
        {
            src: 'https://www.turinea.com/uploads/fotos/foto_40_c.jpg',
            title: 'Ruta de los cementerios',
            short_description: 'La RUTA EUROPEA DE CEMENTERIOS está formada por una red de cementerios que, abriendo sus recintos' +
            ' mediante rutas culturales, da a conocer este importante patrimonio funerario existente en ' +
            'toda Europa de una manera conjunta.',
            valoration: 2,
            time: '1 mes'
        },
        {
            src: 'https://www.turinea.com/uploads/custom/registro_403_.jpg',
            title: 'Ruta de García Lorca',
            short_description: 'Poeta y dramaturgo granadino (1898-1936), se le adscribe a la llamada Generación del 27 y es ' +
            'considerado como uno de los mejores escritores en español del siglo XX.',
            valoration: 3,
            time: '2 semanas'
        },
        {
            src: 'https://www.turinea.com/uploads/fotos/foto_1584_c.jpg',
            title: 'Ruta de los Nazaríes',
            short_description: 'Esta ruta se dedica precisamente a los protagonistas de tan importante capítulo, a la dinastía nazarí' +
            ' que acuñó y encabezó el último estado de al-Andalus',
            valoration: 5,
            time: '5 minutos'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
