import { Component } from '@angular/core';
import { MeteoService } from './widgets/meteo/meteo.service';
import { MeteoWidgetComponent } from './widgets/meteo/meteo-widget/meteo-widget.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

}
