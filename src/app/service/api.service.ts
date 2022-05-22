import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000/posts'

  constructor(
    private http: HttpClient
  ) { }

  getEmployee() {
    return this.http.get<any>(this.baseUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  postEmployee(data:any) {
    return this.http.post<any>(this.baseUrl, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
