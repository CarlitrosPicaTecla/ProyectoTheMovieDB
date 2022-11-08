import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { favMovies } from '../models/dto/favMovies.dto';
import { movieRated } from '../models/dto/movieRated.dto';
import { favMoviesResponse } from '../models/interfaces/favMovies.interface';
import { MovieRatedResponse } from '../models/interfaces/movieRated.interface';
import { Movie, MovieResponse } from '../models/interfaces/movies.interface';
import { MoviesFavResponse } from '../models/interfaces/moviesFav.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovieId(id : number): Observable<Movie> {
    return this.http.get<Movie>(`${environment.ApiBaseUrl}/movie/${id}?api_key=${environment.ApiKey}&language=es`);
  }

  public getMovie(page : number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${environment.ApiBaseUrl}/movie/popular?api_key=${environment.ApiKey}&language=es-ES&page=${page}`);
  }

  public rateMovie(movierated : movieRated, movieId: number): Observable<MovieRatedResponse>{
    return this.http.post<MovieRatedResponse>(`${environment.ApiBaseUrl}/movie/${movieId}/rating?api_key=${environment.ApiKey}&language=es&session_id=${localStorage.getItem('session_id')}`, movierated);
  }


}
