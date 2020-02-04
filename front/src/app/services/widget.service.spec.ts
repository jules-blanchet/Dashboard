import { TestBed } from '@angular/core/testing';

import { WidgetService } from './widget.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HomePageComponent} from '../home-page/home-page.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MeteoWidgetComponent} from '../widgets/meteo/meteo-widget/meteo-widget.component';
import {RegisterPageComponent} from '../register-page/register-page.component';
import {LoginPageComponent} from '../login-page/login-page.component';
import {ExchangesWidgetComponent} from '../widgets/exchanges/exchanges-widget/exchanges-widget.component';
import {TranslateWidgetComponent} from '../widgets/translate/translate-widget/translate-widget.component';
import {MovieWidgetComponent} from '../widgets/movie/movie-widget/movie-widget.component';
import {CocktailWidgetComponent} from '../widgets/cocktail/cocktail-widget/cocktail-widget.component';
import {YoutubeComponent} from '../test/youtube/youtube.component';
import {NasaWidgetComponent} from '../widgets/nasa/nasa-widget/nasa-widget.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

describe('WidgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({
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
      RouterTestingModule,
      FormsModule,
      AngularFontAwesomeModule,
      ReactiveFormsModule,
      NgbModule,
    ],
    providers: [
      WidgetService
    ]
  }));

  it('should be created', () => {
    const service: WidgetService = TestBed.get(WidgetService);
    expect(service).toBeTruthy();
  });
});
