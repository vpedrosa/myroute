import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatGridListModule} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouteComponent} from './route/route.component';
import {NewCommentComponent} from './new-comment/new-comment.component';
import {PlaceComponent} from './place/place.component';
import { TruncatePipe } from './truncate.pipe';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RouteComponent,
        NewCommentComponent,
        PlaceComponent,
        TruncatePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatGridListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
