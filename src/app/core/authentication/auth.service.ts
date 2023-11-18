import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { API_URLS } from "../constants/routes-config";
import { UserCredentials } from "../model/userCredentails.model";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    constructor(private http: HttpClient ) {}
  
    login( creaditails : UserCredentials ): Observable<any> {
      return this.http.post(API_URLS.REQRES_API.LOGIN.url, creaditails).pipe(
        tap( (response:any) => localStorage.setItem('authToken', response.token) ));
    }
  
  }
  