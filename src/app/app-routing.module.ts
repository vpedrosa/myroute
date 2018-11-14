import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PlaceComponent} from './place/place.component';
import {RouteComponent} from './route/route.component';
import {RouteListComponent} from './route-list/route-list.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'lugares', component: PlaceComponent },
    { path: 'rutas', component: RouteListComponent },
    { path: 'rutas/ruta-del-califato', component: RouteComponent },
    { path: 'perfil', component: RouteComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
