import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { favMovies } from '../models/dto/favMovies.dto';
import { AvatarResponse } from '../models/interfaces/account.interface';
import { favMoviesResponse } from '../models/interfaces/favMovies.interface';
import { MoviesFavResponse } from '../models/interfaces/moviesFav.interface';
import { RatedMoviesResponse } from '../models/interfaces/ratedMovies.interface';


@Injectable({
  providedIn: 'root'
})
export class Account {

  constructor(private http: HttpClient) { }


  public getDetails():Observable<AvatarResponse> {

   return this.http.get<AvatarResponse>(`${environment.ApiBaseUrl}/account?api_key=${environment.ApiKey}&session_id=${localStorage.getItem('session_id')}`);
  }

  public getRatedMovies(page: number):Observable<RatedMoviesResponse>{
    return this.http.get<RatedMoviesResponse>(`${environment.ApiBaseUrl}/account/${localStorage.getItem('account_id')}/rated/movies?api_key=${environment.ApiKey}&session_id=${localStorage.getItem('session_id')}&language=es-ES&page=${page}`);
  }

  public getFavMovies(page : number): Observable<MoviesFavResponse>{

    return this.http.get<MoviesFavResponse>(`${environment.ApiBaseUrl}/account/${localStorage.getItem('account_id')}/favorite/movies?api_key=${environment.ApiKey}&session_id=${localStorage.getItem('session_id')}&language=es-ES&page=${page}`);
  }

  public markFavorite(favmovies : favMovies, accountId : number): Observable<favMoviesResponse>{
    return this.http.post<favMoviesResponse>(`${environment.ApiBaseUrl}/account/${accountId}/favorite?api_key=${environment.ApiKey}&session_id=${localStorage.getItem('session_id')}`, favmovies);

  }


}