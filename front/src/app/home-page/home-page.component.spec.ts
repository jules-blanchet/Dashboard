import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import {Router, RouterModule, RouterOutlet} from '@angular/router';
import {MeteoWidgetComponent} from '../widgets/meteo/meteo-widget/meteo-widget.component';
import {WidgetService} from '../services/widget.service';
import {AppRoutingModule} from '../app-routing.module';
import {RegisterPageComponent} from '../register-page/register-page.component';
import {LoginPageComponent} from '../login-page/login-page.component';
import {ExchangesWidgetComponent} from '../widgets/exchanges/exchanges-widget/exchanges-widget.component';
import {TranslateWidgetComponent} from '../widgets/translate/translate-widget/translate-widget.component';
import {MovieWidgetComponent} from '../widgets/movie/movie-widget/movie-widget.component';
import {CocktailWidgetComponent} from '../widgets/cocktail/cocktail-widget/cocktail-widget.component';
import {YoutubeComponent} from '../test/youtube/youtube.component';
import {NasaWidgetComponent} from '../widgets/nasa/nasa-widget/nasa-widget.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        MeteoWidgetComponent,
        RegisterPageComponent,
        LoginPageComponent,
        ExchangesWidgetComponent,
        TranslateWidgetComponent,
        MovieWidgetComponent,
        CocktailWidgetComponent,
        YoutubeComponent,
        NasaWidgetComponent
      ],
      imports: [
        RouterModule,
        AppRoutingModule,
        FormsModule,
        HttpClientTestingModule,
        AngularFontAwesomeModule,
        ReactiveFormsModule,
        NgbModule
      ],
      providers: [
        WidgetService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
