import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie, MovieResponse } from '../models/interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getActorId(movie: Movie): Observable<Movie> {
    return this.http.get<Movie>(`${environment.ApiBaseUrl}movies/${movie.id}?api_key=${environment.ApiKey}&language=es`);
  }

  public getMovie(page : number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${environment.ApiBaseUrl}person/popular?api_key=${environment.ApiKey}&language=es-ES&page=${page}`);
  }
}
