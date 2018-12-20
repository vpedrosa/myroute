import { Injectable } from '@angular/core';
import {Route} from '../models/route';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  private fake_json = '[{"src":"https://www.turinea.com/uploads/fotos/foto_1548_c.jpg","title":"Ruta del califato","short_description":"La Ruta del Califato une las capitales del al-Andalus califal y nazarí siguiendo el itinerario que unía en el siglo XII Córdoba y Granada.","valoration":4,"time":"3 minutos"},{"src":"https://www.turinea.com/uploads/fotos/foto_40_c.jpg","title":"Ruta de los cementerios","short_description":"La RUTA EUROPEA DE CEMENTERIOS está formada por una red de cementerios que, abriendo sus recintos mediante rutas culturales, da a conocer este importante patrimonio funerario existente en toda Europa de una manera conjunta.","valoration":2,"time":"1 mes"},{"src":"https://www.turinea.com/uploads/custom/registro_403_.jpg","title":"Ruta de García Lorca","short_description":"Poeta y dramaturgo granadino (1898-1936), se le adscribe a la llamada Generación del 27 y es considerado como uno de los mejores escritores en español del siglo XX.","valoration":3,"time":"2 semanas"},{"src":"https://www.turinea.com/uploads/fotos/foto_1584_c.jpg","title":"Ruta de los Nazaríes","short_description":"Esta ruta se dedica precisamente a los protagonistas de tan importante capítulo, a la dinastía nazarí que acuñó y encabezó el último estado de al-Andalus","valoration":5,"time":"5 minutos"},{"src":"https://www.turinea.com/uploads/fotos/foto_1548_c.jpg","title":"Ruta del califato","short_description":"La Ruta del Califato une las capitales del al-Andalus califal y nazarí siguiendo el itinerario que unía en el siglo XII Córdoba y Granada.","valoration":4,"time":"3 minutos"},{"src":"https://www.turinea.com/uploads/fotos/foto_40_c.jpg","title":"Ruta de los cementerios","short_description":"La RUTA EUROPEA DE CEMENTERIOS está formada por una red de cementerios que, abriendo sus recintos mediante rutas culturales, da a conocer este importante patrimonio funerario existente en toda Europa de una manera conjunta.","valoration":2,"time":"1 mes"},{"src":"https://www.turinea.com/uploads/custom/registro_403_.jpg","title":"Ruta de García Lorca","short_description":"Poeta y dramaturgo granadino (1898-1936), se le adscribe a la llamada Generación del 27 y es considerado como uno de los mejores escritores en español del siglo XX.","valoration":3,"time":"2 semanas"},{"src":"https://www.turinea.com/uploads/fotos/foto_1584_c.jpg","title":"Ruta de los Nazaríes","short_description":"Esta ruta se dedica precisamente a los protagonistas de tan importante capítulo, a la dinastía nazarí que acuñó y encabezó el último estado de al-Andalus","valoration":5,"time":"5 minutos"}]';
  private routes: Route[] = [];
  constructor() { }

  getRoutes() {
    let data = JSON.parse(this.fake_json);
    for(let item of data){
    }
  }

}
