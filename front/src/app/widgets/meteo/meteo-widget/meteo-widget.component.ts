import {Component, Input, OnInit} from '@angular/core';
import {MeteoService} from '../meteo.service';
import {Meteo} from '../../../shared/models/meteo.model';

@Component({
  selector: 'app-meteo-widget',
  templateUrl: './meteo-widget.component.html',
  styleUrls: ['./meteo-widget.component.css'],
})

export class MeteoWidgetComponent implements OnInit {

  public meteo: Meteo;
  @Input() city: string;

  ngOnInit() {
    this.fetchMeteo();
  }

  constructor(private meteoService: MeteoService) {
    if (!this.city || this.city === "") {
      this.city = "Bordeaux";
    }
  }

  fetchMeteo = async () => {
    await this.meteoService.getMeteo(this.city).then((res) => {
      this.meteo = res;
    });
  };

  updateCityInput(event: any) {
    this.city = event.target.value;
  };

  updateCity = async () => {
    await this.fetchMeteo();
  }
}
