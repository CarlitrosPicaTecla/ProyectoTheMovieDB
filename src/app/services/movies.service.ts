import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { movieRated } from '../models/dto/movieRated.dto';
import { MovieRatedResponse } from '../models/interfaces/movieRated.interface';
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

  public rateMovie(movierated : movieRated, movieId: number): Observable<MovieRatedResponse>{
    return this.http.post<MovieRatedResponse>(`${environment.ApiBaseUrl}/movie/${movieId}/rating?api_key=${environment.ApiKey}&language=es&session_id=${localStorage.getItem('session_id')}`, movierated);
  }


  public getTrailerResponse(idFilm : String): Observable<TrailerResponse>{
    return this.http.get<TrailerResponse>(`${environment.ApiBaseUrl}/movie/${idFilm}/videos?api_key=${environment.ApiKey}`)
  }

}
