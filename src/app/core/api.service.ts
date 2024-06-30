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
  login(data:any):Observable<any>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(`${this.apiUrl}users/login`,data,{headers});
  }
  saveinventorydetails(data:any):Observable<any>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(`${this.apiUrl}users/insertInventory`,data,{headers});
  }

  viewinventorydetails(data:any):Observable<any>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.get(`${this.apiUrl}users/getInventoryDetails/${data}`,{headers});
  }
}
