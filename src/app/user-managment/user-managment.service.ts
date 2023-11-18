import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { API_URLS } from "../core/constants/routes-config";
import { UserListResponse } from "../core/model/user-list.model";
import { User } from "../core/model/user.details.model"; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Method to fetch user list
  getUsers(page: number): Observable<UserListResponse> {
    return this.http.get<UserListResponse>(`${API_URLS.REQRES_API.LIST_USERS.url}?page=${page}`);
  }

  // Method to view a single user
  getUser(userId: number): Observable<User> {
    const endpoint = API_URLS.REQRES_API.GET_SINGLE_USER(userId.toString());
    return this.http.get<User>(endpoint.url);
  }

  // Method to create a new user
  createUser(user: User): Observable<User> {
    return this.http.post<User>(API_URLS.REQRES_API.CREATE_USER.url, user);
  }

  // Method to edit a user
  editUser(userId: number, user: Partial<User>): Observable<User> {
    const endpoint = API_URLS.REQRES_API.UPDATE_USER(userId.toString());
    return this.http.put<User>(endpoint.url, user);
  }

  // Method to delete a user
  deleteUser(userId: number): Observable<any> {
    const endpoint = API_URLS.REQRES_API.DELETE_USER(userId.toString());
    return this.http.delete(endpoint.url);
  }
}
