import { Component, OnInit } from '@angular/core';
import {Asteroid} from '../../../shared/models/asteroid.model';
import {NasaService} from '../nasa.service';

@Component({
  selector: 'app-nasa-widget',
  templateUrl: './nasa-widget.component.html',
  styleUrls: ['./nasa-widget.component.css']
})
export class NasaWidgetComponent implements OnInit {

  asteroid: Asteroid;

  constructor(private asteroidService: NasaService) {
    this.asteroid = {name: '', diameter: 0, velocity: 0, distance: 0};
  }

  async ngOnInit() {
    await this.fetchAsteroid();
  }

  fetchAsteroid = async () => {
    await this.asteroidService.getAsteroid('1994-11-01').then((res) => {
      this.asteroid = res;
    });
  };

}
