import { Component, OnInit } from '@angular/core';
import {Movies} from '../../../shared/models/movie.model';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movie-widget',
  templateUrl: './movie-widget.component.html',
  styleUrls: ['./movie-widget.component.css']
})
export class MovieWidgetComponent implements OnInit {
  movies: Movies;
  page: number;
  filter: string;

  async ngOnInit() {
    await this.getMovies();
  }

  constructor(private moviesService: MovieService)
  {
    this.page = 1;
    this.filter = "popular";
  }

  getImageUrl(link: string): string {
    return ("https://image.tmdb.org/t/p/w500" + link);
  }

  async loadMoreImage() {
    this.page += 1;
    const additionalMovies = await this.moviesService.getMovies(this.page, this.filter);
    // @ts-ignore
    this.movies.results = this.movies.results.concat(additionalMovies.results);
  }

  async getMovies() {
    this.movies = await this.moviesService.getMovies(this.page, this.filter);
  }

  async onFilterChanged(event: any) {
    this.filter = event.target.value;
    this.page = 1;
    await this.getMovies();
  }
}
