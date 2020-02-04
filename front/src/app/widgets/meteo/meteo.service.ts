import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Meteo} from '../../shared/models/meteo.model';


@Injectable({
  providedIn: 'root'
})

export class MeteoService {

  meteo: Meteo;

  constructor(private httpClient: HttpClient) {
  }

  async getMeteo(city: string): Promise<Meteo> {
    let object = await this.httpClient.get('https://api.weatherbit.io/v2.0/current?city=' + city + '&key=4dc97cf63a3445608584de1e7f06daf4').toPromise();
    this.meteo = await new Meteo().deserialize(object["data"][0]);
    return this.meteo;
  }
}

