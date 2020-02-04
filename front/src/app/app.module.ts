import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';


import { MeteoWidgetComponent } from './widgets/meteo/meteo-widget/meteo-widget.component';
import { HttpClientModule } from '@angular/common/http';
import { ExchangesWidgetComponent } from './widgets/exchanges/exchanges-widget/exchanges-widget.component';
import {NasaWidgetComponent} from './widgets/nasa/nasa-widget/nasa-widget.component';

import { YoutubeComponent } from './test/youtube/youtube.component';
import { WidgetService } from './services/widget.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {TranslateWidgetComponent} from './widgets/translate/translate-widget/translate-widget.component';
import {MovieWidgetComponent} from './widgets/movie/movie-widget/movie-widget.component';
import { CocktailWidgetComponent } from './widgets/cocktail/cocktail-widget/cocktail-widget.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MeteoService} from './widgets/meteo/meteo.service';
import {CocktailService} from './widgets/cocktail/cocktail.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterOutlet} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    TranslateWidgetComponent,
    YoutubeComponent,
    MeteoWidgetComponent,
    ExchangesWidgetComponent,
    NasaWidgetComponent,
    MovieWidgetComponent,
    CocktailWidgetComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    WidgetService,
    MeteoService,
    CocktailService,
    HttpClientModule,
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
