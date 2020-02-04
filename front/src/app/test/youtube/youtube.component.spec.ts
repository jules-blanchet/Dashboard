import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeComponent } from './youtube.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {AppRoutingModule} from '../../app-routing.module';
import {RegisterPageComponent} from '../../register-page/register-page.component';
import {LoginPageComponent} from '../../login-page/login-page.component';
import {MeteoWidgetComponent} from '../../widgets/meteo/meteo-widget/meteo-widget.component';
import {HomePageComponent} from '../../home-page/home-page.component';
import {ExchangesWidgetComponent} from '../../widgets/exchanges/exchanges-widget/exchanges-widget.component';
import {TranslateWidgetComponent} from '../../widgets/translate/translate-widget/translate-widget.component';
import {MovieWidgetComponent} from '../../widgets/movie/movie-widget/movie-widget.component';
import {CocktailWidgetComponent} from '../../widgets/cocktail/cocktail-widget/cocktail-widget.component';
import {NasaWidgetComponent} from '../../widgets/nasa/nasa-widget/nasa-widget.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

describe('YoutubeComponent', () => {
  let component: YoutubeComponent;
  let fixture: ComponentFixture<YoutubeComponent>;

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
        HttpClientTestingModule,
        AppRoutingModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        NgbModule,
        AngularFontAwesomeModule,
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
