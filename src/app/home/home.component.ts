import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    routes = [
        {
            url: 'http://www.turgranada.es/wp-content/blogs.dir/2/files_mf/cache/th_6e686d7da0ecdfd10234ad722b4d943f_acequia-alicun2.jpg',
            title: 'Acequia del Toril y dólmenes de Alicún',
            description: 'Este corta y sencilla ruta permite contemplar los dólmenes situados junto al Balneario de Alicún' +
            'de las Torres yla espectacular y extraña pared mineral que ha formado una acequia de aguas termales a través de los siglos.'
        },
        {
            url: 'http://www.turgranada.es/wp-content/uploads/sites/2/2014/02/alhama-de-granada-1.jpg?x53512',
            title: 'Acequia del Toril y dólmenes de Alicún',
            description: 'Este corta y sencilla ruta permite contemplar los dólmenes situados junto al Balneario de Alicún' +
            'de las Torres yla espectacular y extraña pared mineral que ha formado una acequia de aguas termales a través de los siglos.'
        },
        {
            url: 'http://www.turgranada.es/wp-content/blogs.dir/2/files_mf/cache/th_db40546b061c7ee23bbbbcfbeb9d4806_fonfria2.jpg?x53512',
            title: 'Barranco de La Fonfría y pino de La Señora',
            description: 'El Parque Natural de la Sierra de Baza ofrece un refrescante recorrido por el arroyo de Baúl que' +
            'permite contemplar uno de los mayores ejemplares de pino laricio de la provincia de Granada.'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
