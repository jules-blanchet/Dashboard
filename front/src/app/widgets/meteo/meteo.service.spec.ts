import { TestBed } from '@angular/core/testing';
import { MeteoService } from './meteo.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Meteo} from '../../shared/models/meteo.model';

describe('MeteoService', () => {

  let originalTimeout;

  beforeEach(function() {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', () => {
    const service: MeteoService = TestBed.get(MeteoService);
    expect(service).toBeTruthy();
  });

  it('basic  request', async () => {

    const service: MeteoService = TestBed.get(MeteoService);
    let meteo: Meteo = null;
    await service.getMeteo("Bordeaux").then((res) => {
      meteo = res;
    });
    expect(meteo).toBeNull();
  });

  afterEach(function() {
  })
});
