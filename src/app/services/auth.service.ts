import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateSessionDto } from '../models/dto/createSession.dto';
import { DeleteSessionDto } from '../models/dto/deleteSession.dto';
import { CreateSessionResponse } from '../models/interfaces/create-session.interface';
import { DeleteResponse } from '../models/interfaces/delete-session.interface';
import { RequestTokenResponse } from '../models/interfaces/request-token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  createRequestToken(): Observable<RequestTokenResponse>{
    return this.http.get<RequestTokenResponse>(`${environment.ApiBaseUrl}/authentication/token/new?api_key=${environment.ApiKey}`);
  }

  createSession(createSessionDto: CreateSessionDto): Observable<CreateSessionResponse>{
    return this.http.post<CreateSessionResponse>(`${environment.ApiBaseUrl}/authentication/session/new?api_key=${environment.ApiKey}`,createSessionDto)
  }

  deleteSession(deleteSessionDto: DeleteSessionDto): Observable<DeleteResponse>{
    return this.http.request<DeleteResponse>('delete', `${environment.ApiBaseUrl}/authentication/session/new?api_key=${environment.ApiKey}`,
    {
      body: deleteSessionDto
    }
    )
  }

}
