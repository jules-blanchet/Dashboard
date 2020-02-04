import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Movies} from '../../shared/models/movie.model';

describe('MovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]}));

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

  it('basic request', async () => {
    const service: MovieService = TestBed.get(MovieService);
    let movies: Movies = null;
    await service.getMovies(1, "popular").then((res) => {
      movies = res;
    });
    expect(movies).toBe('');
  })
});
