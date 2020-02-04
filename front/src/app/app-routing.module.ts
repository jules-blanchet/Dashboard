import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterPageComponent} from './register-page/register-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {MeteoWidgetComponent} from './widgets/meteo/meteo-widget/meteo-widget.component';
import {ExchangesWidgetComponent} from './widgets/exchanges/exchanges-widget/exchanges-widget.component';
import {MovieWidgetComponent} from './widgets/movie/movie-widget/movie-widget.component';
import { YoutubeComponent } from './test/youtube/youtube.component';
import {TranslateWidgetComponent} from './widgets/translate/translate-widget/translate-widget.component';
import { CocktailWidgetComponent } from './widgets/cocktail/cocktail-widget/cocktail-widget.component';

const routes: Routes = [
  { path: 'registerPage', component: RegisterPageComponent},
  { path: '', component: LoginPageComponent},
  { path: 'meteoWidget', component: MeteoWidgetComponent},
  { path: 'exchangesWidget', component: ExchangesWidgetComponent},
  { path: 'translateWidget', component: TranslateWidgetComponent},
  { path: 'movieWidget', component: MovieWidgetComponent},
  { path: 'homePage', component: HomePageComponent},
  { path: 'cocktail', component: CocktailWidgetComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
