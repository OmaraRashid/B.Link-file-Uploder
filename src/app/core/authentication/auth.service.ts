import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { API_URLS } from "../constants/routes-config";
import { UserCredentials } from "../model/userCredentails.model";
import { auth_token_key } from "../constants/defines";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    constructor(private http: HttpClient , private router: Router) {}
  
    public login( creaditails : UserCredentials ): Observable<any> {
      return this.http.post(API_URLS.REQRES_API.LOGIN.url, creaditails).pipe(
        tap( (response:any) => localStorage.setItem(auth_token_key, response.token) ));
    }

    public logout(): void {
      localStorage.removeItem(auth_token_key);
      this.router.navigate(['/users']);
    }
  
  public isLoggedIn(): boolean {
    return !!localStorage.getItem(auth_token_key);
  }
  
}
  