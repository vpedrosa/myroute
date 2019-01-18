import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatGridListModule} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouteComponent} from './route/route.component';
import {NewCommentComponent} from './new-comment/new-comment.component';
import {PlaceComponent} from './place/place.component';
import {TruncatePipe} from './truncate.pipe';
import {RouteListComponent} from './route-list/route-list.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProposalComponent} from './proposal/proposal.component';
import {ProfileComponent} from './profile/profile.component';
import {RouteProposalComponent} from './route-proposal/route-proposal.component';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {ApiService} from './shared/services/api.service';
import {RoutesService} from './shared/services/routes.service';
import {AuthService} from './shared/services/auth.service';
import {PlaceListComponent} from './place-list/place-list.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeEs, 'es');

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RouteComponent,
        NewCommentComponent,
        PlaceComponent,
        TruncatePipe,
        RouteListComponent,
        LoginComponent,
        RegisterComponent,
        ProposalComponent,
        ProfileComponent,
        RouteProposalComponent,
        PlaceListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatGridListModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        HttpClient,
        ApiService,
        RoutesService,
        AuthService,
        {provide: LOCALE_ID, useValue: 'es'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
