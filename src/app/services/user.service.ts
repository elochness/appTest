import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isLogged: boolean = true;

  constructor(
    private meta: Meta,
    private httpClient: HttpClient
    ) {}

  public isLoggedIn(): boolean {
    return this.isLogged;
  }

  public getUsers(): Observable<User[]> {
    return this.httpClient
    .get<User[]>("https://jsonplaceholder.typicode.com/users");
  }

}
