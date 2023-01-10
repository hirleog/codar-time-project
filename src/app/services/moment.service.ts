import { UserDTO } from './../interfaces/UserDTO';
import { Moment } from './../interfaces/Moment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/moments`

  private apiLogin = '/api'

  constructor(
    private http: HttpClient,
  ) {

  }
  public createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData)
  }

  public getMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  public getMomentById(id: number): Observable<Response<Moment>> {
    const url = `${this.apiUrl} / ${id}`
    return this.http.get<Response<Moment>>(url);
  }

  public getAllUsers(): Observable<Response<UserDTO>> {
    return this.http.get<Response<UserDTO>>(this.apiLogin)
  }

  public createUser (payload: UserDTO) {
    return this.http.post(this.apiLogin, payload)
  }
}
