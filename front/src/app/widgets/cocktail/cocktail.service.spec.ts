import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { CocktailService } from './cocktail.service';
import {HttpClientModule} from '@angular/common/http';

describe('CocktailService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: CocktailService = TestBed.get(CocktailService);
    expect(service).toBeTruthy();
  });
});
