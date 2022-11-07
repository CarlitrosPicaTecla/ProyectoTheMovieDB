import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActorResponse, Actor } from '../models/interfaces/actor.interface';
import { ActorDetails } from '../models/interfaces/actorDetails.interface';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) {}

  getAllActors(page:number): Observable<ActorResponse>{
    return this.http.get<ActorResponse>(`${environment.ApiBaseUrl}/person/popular?api_key=${environment.ApiKey}&language=en-US&page=${page}`)
  }
  
  getActorDetails(actor:Actor): Observable<ActorDetails>{
    return this.http.get<ActorDetails>(`${environment.ApiBaseUrl}/person/${actor.id}?api_key=${environment.ApiKey}&language=en-US`)
  }
  
  }