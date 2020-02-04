import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Movies} from '../../shared/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movies;

  constructor(private httpClient : HttpClient)
  {

  }

  async getMovies(page : number, filter: string): Promise<Movies> {
    let object = await this.httpClient.get( 'https://api.themoviedb.org/3/movie/' + filter + '?api_key=1274bb44465afb7a138efe26463e3441&language=fr&page=' + page).toPromise();
    this.movies = await new Movies().deserialize(object);
    return this.movies;
  }
}
