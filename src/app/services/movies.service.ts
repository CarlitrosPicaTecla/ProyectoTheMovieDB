import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie, MovieResponse, TrailerResponse } from '../models/interfaces/movies.interface';

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

  public getTrailerResponse(idFilm : String): Observable<TrailerResponse>{
    return this.http.get<TrailerResponse>(`${environment.ApiBaseUrl}/movie/${idFilm}/videos?api_key=${environment.ApiKey}`)
  }

}
