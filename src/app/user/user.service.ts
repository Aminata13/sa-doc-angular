import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl = 'https://127.0.0.1:8000/api';
  public authorizationName = 'tuto_angular';

  constructor(private http: HttpClient) { }

  login(): any {
    const credentials = {
      username: 'admin1',
      password: 'password'
    };
    return this.http.post(`${this.baseUrl}/login_check`, credentials);
  }

  getToken(): void {
    this.login().subscribe(
      token => {
        localStorage.setItem('token', token.token);
      },
      httpError => console.log(httpError.error.message)
    );
  }

  getUsers() {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `${this.authorizationName} ${token}`
      })
    };
    const endpoint = 'admin/users';
    return this.http.get(`${this.baseUrl}/${endpoint}`, httpOptions);
  }
}
