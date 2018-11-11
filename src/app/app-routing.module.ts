import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PlaceComponent} from './place/place.component';
import {RouteComponent} from './route/route.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'lugares', component: PlaceComponent },
    { path: 'rutas', component: RouteComponent },
    { path: 'perfil', component: RouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
