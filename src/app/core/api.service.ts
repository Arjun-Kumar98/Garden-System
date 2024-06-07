import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  signUp(data:any):Observable<any>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(`${this.apiUrl}users/signup`,data,{headers});
  }
}