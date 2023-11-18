import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { API_URLS } from "../constants/routes-config";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    constructor(private http: HttpClient ) {}
  
    login(username: string, password: string): Observable<any> {
      return this.http.post(API_URLS.REQRES_API.LOGIN.url, { username, password });
    }
  
  }
  