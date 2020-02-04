import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Asteroid} from '../../shared/models/asteroid.model';

@Injectable({
  providedIn: 'root'
})

export class NasaService {

  asteroid: Asteroid;
  constructor(private httpClient: HttpClient) {
    this.asteroid = {name: '', diameter: 0, velocity: 0, distance: 0};
  }

  async getAsteroid(date: any): Promise<Asteroid> {
    const object = await this.httpClient.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + date + '&end_date=' + date + '&api_key=Q0PBXt4fXog0HgpugQX0F4aiJ0d3H4ArnJJ80xVG').toPromise();
    this.asteroid.name = object['near_earth_objects'][date][0]['name'];
    this.asteroid.diameter = object['near_earth_objects'][date][0]['estimated_diameter']['meters']['estimated_diameter_min'];
    this.asteroid.velocity = object['near_earth_objects'][date][0]['close_approach_data'][0]['relative_velocity']['kilometers_per_hour'];
    this.asteroid.distance = object['near_earth_objects'][date][0]['close_approach_data'][0]['miss_distance']['kilometers'];
    return this.asteroid;
  }
}
