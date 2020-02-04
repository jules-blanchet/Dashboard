import { TestBed } from '@angular/core/testing';

import { NasaService } from './nasa.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('NasaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: NasaService = TestBed.get(NasaService);
    expect(service).toBeTruthy();
  });
});
